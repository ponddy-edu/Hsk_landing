import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {loadStripe} from '@stripe/stripe-js/pure';
import {SheetService} from '../../../utils/sheet.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  userFormGroup: FormGroup;
  stripe: any;
  activeTab = 0;
  pricingValue: number;

  pricingList = {
    adult1: {price: 288, stripeKey: 'price_1ITNQdHRhoOpWeKwhfz0kv7T'},
    adult3: {price: 320, stripeKey: 'price_1ITNQdHRhoOpWeKw6q5EQrKg'},
    student1: {price: 320, stripeKey: 'price_1ITWLnHRhoOpWeKwLLS2khUh'},
    student3: {price: 384, stripeKey: 'price_1ITNQdHRhoOpWeKwSsUNinRj'}
  }

  infoTableList = {
    hsk1: '/assets/image/freeclass/HSK 1&2.svg',
    hsk3: '/assets/image/freeclass/HSK 3.svg'
  }
  // info provided by Emily 3/11 at slack
  dateHsk12end = '2021-03-12T11:00:00+08:00'
  dateHsk3end = '2021-03-13T11:00:00+08:00'
  dateDiscountEnd = '2021-03-18T11:00:00+08:00'

  constructor(private formBuilder: FormBuilder,
              public sheetService: SheetService) {
    this.checkNowPricing()
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
      stripePricing = this.pricingList.adult1.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      stripePricing = this.pricingList.adult3.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = this.pricingList.student1.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = this.pricingList.student3.stripeKey
    }
    return stripePricing
  }

  changePricing() {
    if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.pricingValue = this.pricingList.adult1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = this.pricingList.student1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.pricingValue = this.pricingList.adult3.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = this.pricingList.student3.price
    }
  }

  checkNowPricing() {
    const endDiscountDay = new Date(this.dateDiscountEnd).getTime()
    const endHsk3DiscountDay = new Date(this.dateHsk3end).getTime()
    const endHsk1DiscountDay = new Date(this.dateHsk12end).getTime()
    // const now = new Date('2021-03-12T12:00:00+08:00').getTime();
    const now = new Date().getTime();

    if (endDiscountDay - now < 0) {
      this.endYellowDiscount()
    } else if (endHsk3DiscountDay - now < 0) {
      this.endHsk3RedDiscount()
    } else if (endHsk1DiscountDay - now < 0) {
      this.endHsk12RedDiscount()
    }
  }

  endHsk12RedDiscount() {
    this.pricingList.adult1 = {price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
    this.pricingList.student1 = {price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original.svg'
  }

  endHsk3RedDiscount() {
    console.log('end3')
    this.pricingList.adult1 = {price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
    this.pricingList.student1 = {price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
    this.pricingList.adult3 = {price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwftZrdlCZ'}
    this.pricingList.student3 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwtQ3jYrWF'}
    this.infoTableList.hsk3 = '/assets/image/freeclass/HSK 3_original.svg'
  }

  endYellowDiscount() {
    this.pricingList.adult1 = {price: 432, stripeKey: 'price_1ITNQdHRhoOpWeKwQh9IfFIa'}
    this.pricingList.adult3 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwdyiQoif1'}
    this.pricingList.student1 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKw4hxuhBji'}
    this.pricingList.student3 = {price: 576, stripeKey: 'price_1ITNQdHRhoOpWeKwNQB8WlB1'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original price.svg'
    this.infoTableList.hsk3 = '/assets/image/freeclass/HSK 3_original price.svg'

  }
}
