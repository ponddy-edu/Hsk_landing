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
  stripePricing = 'price_1ITNQdHRhoOpWeKwhfz0kv7T'

  constructor(private formBuilder: FormBuilder,
              public sheetService: SheetService) {

  }

  async ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      Email: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Level: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Age: new FormControl(''),
      Days: new FormControl('', Validators.required),
    });
    this.stripe = await loadStripe('pk_live_Pz4r4nqTVPSZC1Puk1lOBL0l');
  }

  payment() {
    const formData = {
      ...this.userFormGroup.getRawValue(),
      ...{Order_id: this.userFormGroup.get('Email')?.value + Date.now().toString()}
    }
    const stripeKey = this.selectStripeKey()
    this.sheetService.addRowFreeClass(formData)
      .subscribe(res => {
        this.stripe.redirectToCheckout({
          lineItems: [{price: this.stripePricing, quantity: 1}],
          mode: 'payment',
          successUrl: window.location.href + '?action=pay' + '&plan=' + this.stripePricing,
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

  selectStripeKey() {
    let stripePricing = ''
    if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.stripePricing = 'price_1ITNQdHRhoOpWeKwhfz0kv7T'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.stripePricing = 'price_1ITNQdHRhoOpWeKw6q5EQrKg'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.stripePricing = 'price_1ITNQdHRhoOpWeKw7zJqZGIc'
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.stripePricing = 'price_1ITNQdHRhoOpWeKwSsUNinRj'
    }
    return stripePricing
  }
}
