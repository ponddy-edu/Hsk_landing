import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {loadStripe} from '@stripe/stripe-js/pure';
import {SheetService} from '../../../utils/sheet.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  userFormGroup: FormGroup;
  stripe: any
  activeTab = 0
  pricingValue: number

  pricingList = {
    adult1: {price: 288, stripeKey: 'price_1ITNQdHRhoOpWeKwhfz0kv7T'},
    adult3: {price: 320, stripeKey: 'price_1ITNQdHRhoOpWeKw6q5EQrKg'},
    student1: {price: 320, stripeKey: 'price_1ITWLnHRhoOpWeKwLLS2khUh'},
    student3: {price: 384, stripeKey: 'price_1ITNQdHRhoOpWeKwSsUNinRj'}
  }
  // info provided by Emily 3/11 at slack
  dateHsk12end = '2021-03-12T11:00:00+08:00'
  dateHsk3end = '2021-03-13T11:00:00+08:00'
  dateCampaignEnd = '2021-03-18T11:00:00+08:00'

  constructor(private formBuilder: FormBuilder,
              public sheetService: SheetService) {
    this.checkHsk12EndTime()
    this.checkHsk3EndTime()
  }

  async ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      Email: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Level: new FormControl('', Validators.required),
      Phone: new FormControl(''),
      Age: new FormControl('', Validators.required),
      Days: new FormControl('', Validators.required),
    });
    this.stripe = await loadStripe('pk_live_Pz4r4nqTVPSZC1Puk1lOBL0l');

  }

  payment() {
    const orderID = this.userFormGroup.get('Email')?.value + Date.now().toString()
    const formData = {
      ...this.userFormGroup.getRawValue(),
      ...{Order_id: orderID},
      ...{Datetime: new Date().toLocaleString()}
    }
    const stripePricing = this.selectStripePricingKey()
    this.sheetService.addRowFreeClass(formData)
      .subscribe(res => {
        this.stripe.redirectToCheckout({
          lineItems: [{price: stripePricing, quantity: 1}],
          clientReferenceId: orderID,
          mode: 'payment',
          customerEmail: this.userFormGroup.get('Email')?.value,
          successUrl: window.location.href + '?action=pay' + '&plan=' + stripePricing,
          cancelUrl: window.location.href,
        })
          .then((result: any) => {
            if (result.error) {
              /*
               * If `redirectToCheckout` fails due to a browser or network
               * error, display the localized error message to your customer.
               */
            }
          });
      })
  }

  selectStripePricingKey() {
    let stripePricing = ''
    if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Adult') {
      stripePricing = 'price_1ITNQdHRhoOpWeKwhfz0kv7T'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      stripePricing = 'price_1ITNQdHRhoOpWeKw6q5EQrKg'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = 'price_1ITWLnHRhoOpWeKwLLS2khUh'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = 'price_1ITNQdHRhoOpWeKwSsUNinRj'
    }
    return stripePricing
  }

  changePricing() {
    if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.pricingValue = this.pricingList.adult1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = this.pricingList.student1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.pricingValue = this.pricingList.adult1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = this.pricingList.adult3.price
    }
  }

  checkHsk12EndTime() {
    const endDate = new Date(this.dateHsk12end).getTime()
    const now = new Date().getTime();
    const distance = endDate - now;
    if (distance < 0) {
      this.pricingList.adult1 = {price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
      this.pricingList.adult3 = {price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwftZrdlCZ'}
      this.pricingList.student1 = {price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
      this.pricingList.student3 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwtQ3jYrWF'}
    }
  }

  checkHsk3EndTime() {
    const endDate = new Date(this.dateHsk3end).getTime()
    const now = new Date().getTime();
    const distance = endDate - now;
    if (distance < 0) {
      this.pricingList.adult1 = {price: 432, stripeKey: 'price_1ITNQdHRhoOpWeKwQh9IfFIa'}
      this.pricingList.adult3 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwdyiQoif1'}
      this.pricingList.student1 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKw4hxuhBji'}
      this.pricingList.student3 = {price: 576, stripeKey: 'price_1ITNQdHRhoOpWeKwNQB8WlB1'}
    }
  }
}
