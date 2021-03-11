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

  constructor(private formBuilder: FormBuilder,
              public sheetService: SheetService) {

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
      this.pricingValue = 228
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.pricingValue = 360
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = 320
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.pricingValue = 400
    }
  }
}
