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
  currentPriceMap: PricingPlan;


  pricingList = {
    adult1: {price: 288, stripeKey: 'price_1ITNQdHRhoOpWeKwhfz0kv7T', originPrice: 432},
    adult3: {price: 320, stripeKey: 'price_1ITNQdHRhoOpWeKw6q5EQrKg', originPrice: 480},
    adult4: {price: 576, stripeKey: 'price_1J4iH2HRhoOpWeKwRP0t7YA', originPrice: 576},
    student1: {price: 320, stripeKey: 'price_1ITNQdHRhoOpWeKw7zJqZGIc', originPrice: 480},
    student3: {price: 384, stripeKey: 'price_1ITNQdHRhoOpWeKwSsUNinRj', originPrice: 576},
    student4: {price: 1152, stripeKey: 'price_1J4iHjHRhoOpWeKwrca1fh7R', originPrice: 1152}
  }

  infoTableList = {
    hsk1: '/assets/image/freeclass/HSK 1&2.svg',
    hsk3: '/assets/image/freeclass/HSK 3.svg',
    hsk4: '/assets/image/freeclass/HSK 4_original price'
  }
  // info provided by Emily 3/11 at slack
  dateHsk12end = '2021-03-12T11:00:00+08:00'
  dateHsk3end = '2021-03-13T11:00:00+08:00'
  dateHsk4end = '2021-03-13T11:00:00+08:00'
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
      // @ts-ignore
      Coupon: new FormControl('', this.checkCouponValid)
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
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 4' && this.userFormGroup.get('Age')?.value === 'Adult') {
      stripePricing = this.pricingList.adult4.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = this.pricingList.student1.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = this.pricingList.student3.stripeKey
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 4' && this.userFormGroup.get('Age')?.value === 'Student') {
      stripePricing = this.pricingList.student4.stripeKey
    }
    return stripePricing
  }

  changePricing() {
    if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.currentPriceMap = this.pricingList.adult1
      this.pricingValue = this.pricingList.adult1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 1 & 2' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.currentPriceMap = this.pricingList.student1
      this.pricingValue = this.pricingList.student1.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.currentPriceMap = this.pricingList.adult3
      this.pricingValue = this.pricingList.adult3.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 3' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.currentPriceMap = this.pricingList.student3
      this.pricingValue = this.pricingList.student3.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 4' && this.userFormGroup.get('Age')?.value === 'Adult') {
      this.currentPriceMap = this.pricingList.adult4
      this.pricingValue = this.pricingList.adult4.price
    } else if (this.userFormGroup.get('Level')?.value === 'HSK 4' && this.userFormGroup.get('Age')?.value === 'Student') {
      this.currentPriceMap = this.pricingList.student4
      this.pricingValue = this.pricingList.student4.price
    }
  }

  checkNowPricing() {
    const endDiscountDay = new Date(this.dateDiscountEnd).getTime()
    const endHsk4DiscountDay = new Date(this.dateHsk4end).getTime()
    const endHsk3DiscountDay = new Date(this.dateHsk3end).getTime()
    const endHsk1DiscountDay = new Date(this.dateHsk12end).getTime()
    // const now = new Date('2021-03-12T12:00:00+08:00').getTime();
    const now = new Date().getTime();

    if (endDiscountDay - now < 0) {
      this.endYellowDiscount()
    } else if (endHsk4DiscountDay - now < 0) {
      this.endHsk4RedDiscount()
    } else if (endHsk3DiscountDay - now < 0) {
      this.endHsk3RedDiscount()
    } else if (endHsk1DiscountDay - now < 0) {
      this.endHsk12RedDiscount()
    }
  }

  endHsk12RedDiscount() {
    this.pricingList.adult1 = {...this.pricingList.adult1, price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
    this.pricingList.student1 = {...this.pricingList.student1, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original price.svg'
  }

  endHsk3RedDiscount() {
    this.pricingList.adult1 = {...this.pricingList.adult1, price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
    this.pricingList.student1 = {...this.pricingList.student1, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
    this.pricingList.adult3 = {...this.pricingList.adult3, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwftZrdlCZ'}
    this.pricingList.student3 = {...this.pricingList.student3, price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwtQ3jYrWF'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original price.svg'
    this.infoTableList.hsk3 = '/assets/image/freeclass/HSK 3_original price.svg'
  }

  endHsk4RedDiscount() {
    this.pricingList.adult1 = {...this.pricingList.adult1, price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
    this.pricingList.student1 = {...this.pricingList.student1, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'}
    this.pricingList.adult3 = {...this.pricingList.adult3, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwftZrdlCZ'}
    this.pricingList.student3 = {...this.pricingList.student3, price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwtQ3jYrWF'}
    this.pricingList.adult4 = {...this.pricingList.adult4, price: 576, stripeKey: 'price_1J4iH2HRhoOpWeKwRP0t7YAb'}
    this.pricingList.student4 = {...this.pricingList.student4, price: 1152, stripeKey: 'price_1J4iHjHRhoOpWeKwrca1fh7R'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original price.svg'
    this.infoTableList.hsk3 = '/assets/image/freeclass/HSK 3_original price.svg'
    this.infoTableList.hsk4 = '/assets/image/freeclass/HSK 4_original price.svg'
  }

  endYellowDiscount() {
    this.pricingList.adult1 = {...this.pricingList.adult1, price: 432, stripeKey: 'price_1ITNQdHRhoOpWeKwQh9IfFIa'}
    this.pricingList.adult3 = {...this.pricingList.adult3, price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwdyiQoif1'}
    this.pricingList.adult4 = {...this.pricingList.adult4, price: 576, stripeKey: 'price_1J4iH2HRhoOpWeKwRP0t7YAb'}
    this.pricingList.student1 = {...this.pricingList.student1, price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKw4hxuhBji'}
    this.pricingList.student3 = {...this.pricingList.student3, price: 576, stripeKey: 'price_1ITNQdHRhoOpWeKwNQB8WlB1'}
    this.pricingList.student4 = {...this.pricingList.student4, price: 1152, stripeKey: 'price_1J4iHjHRhoOpWeKwrca1fh7R'}
    this.infoTableList.hsk1 = '/assets/image/freeclass/HSK 1&2_original price.svg'
    this.infoTableList.hsk3 = '/assets/image/freeclass/HSK 3_original price.svg'
    this.infoTableList.hsk4 = '/assets/image/freeclass/HSK 4_original price.svg'
  }


  checkCouponValid(couponControl: FormControl) {
    const text = couponControl.value
    if (text === '' || btoa(text.toLowerCase()) === 'OC9zZXNzaW9u' || btoa(text.toLowerCase()) === 'MTAvc2Vzc2lvbg==') {
      return null
    } else {
      return {
        validateEmail: {
          valid: false
        }
      };
    }
  }

  checkCouponDiscount($event: any) {

    this.pricingList.adult1 = {...this.pricingList.adult1, price: 432, stripeKey: 'price_1ITNQdHRhoOpWeKwQh9IfFIa'}
    this.pricingList.adult3 = {...this.pricingList.adult3, price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwdyiQoif1'}
    this.pricingList.adult4 = {...this.pricingList.adult4, price: 576, stripeKey: 'price_1J4iH2HRhoOpWeKwRP0t7YAb'}
    this.pricingList.student1 = {
      ...this.pricingList.student1,
      price: 480,
      stripeKey: 'price_1ITNQdHRhoOpWeKw4hxuhBji'
    }
    this.pricingList.student3 = {
      ...this.pricingList.student3,
      price: 576,
      stripeKey: 'price_1ITNQdHRhoOpWeKwNQB8WlB1'
    }
    this.pricingList.student4 = {
      ...this.pricingList.student4,
      price: 1152,
      stripeKey: 'price_1J4iHjHRhoOpWeKwrca1fh7R'
    }

    if (btoa($event.toLowerCase()) === 'OC9zZXNzaW9u') {
      this.pricingList.adult1 = {...this.pricingList.adult1, price: 288, stripeKey: 'price_1ITNQdHRhoOpWeKwhfz0kv7T'}
      this.pricingList.adult3 = {...this.pricingList.adult3, price: 320, stripeKey: 'price_1ITNQdHRhoOpWeKw6q5EQrKg'}
      this.pricingList.adult4 = {...this.pricingList.adult4, price: 384, stripeKey: 'price_1J7j8lHRhoOpWeKwwzAaH4Ci'}
      this.pricingList.student1 = {
        ...this.pricingList.student1,
        price: 320,
        stripeKey: 'price_1ITNQdHRhoOpWeKw7zJqZGIc'
      }
      this.pricingList.student3 = {
        ...this.pricingList.student3,
        price: 384,
        stripeKey: 'price_1ITNQdHRhoOpWeKwSsUNinRj'
      }
      this.pricingList.student4 = {
        ...this.pricingList.student4,
        price: 768,
        stripeKey: 'price_1J7jIHHRhoOpWeKwHlZMn3kp'
      }
    } else if (btoa($event.toLowerCase()) === 'MTAvc2Vzc2lvbg==') {
      this.pricingList.adult1 = {...this.pricingList.adult1, price: 360, stripeKey: 'price_1ITNQdHRhoOpWeKwK2Mwvcye'}
      this.pricingList.student1 = {
        ...this.pricingList.student1,
        price: 400,
        stripeKey: 'price_1ITNQdHRhoOpWeKwfazVauP8'
      }
      this.pricingList.adult3 = {...this.pricingList.adult3, price: 400, stripeKey: 'price_1ITNQdHRhoOpWeKwftZrdlCZ'}
      this.pricingList.student3 = {
        ...this.pricingList.student3,
        price: 480,
        stripeKey: 'price_1ITNQdHRhoOpWeKwtQ3jYrWF'
      }
      this.pricingList.adult4 = {...this.pricingList.adult4, price: 480, stripeKey: 'price_1J7jH6HRhoOpWeKwbrs0NgDG'}
      this.pricingList.student4 = {
        ...this.pricingList.student4,
        price: 960,
        stripeKey: 'price_1J7jIYHRhoOpWeKw70apdcEU'
      }
    } else {

    }


    // if ($event === 'PONDDYCI') {
    //   this.pricingList.adult1 = {price: 288, stripeKey: 'price_1IbK3qHRhoOpWeKw0Wf2RReQ'}
    //   this.pricingList.adult3 = {price: 320, stripeKey: 'price_1IbK48HRhoOpWeKw4OB0k2kE'}
    //   this.pricingList.student1 = {price: 320, stripeKey: 'price_1IbK4PHRhoOpWeKw3R95iE1c'}
    //   this.pricingList.student3 = {price: 384, stripeKey: 'price_1IbK4yHRhoOpWeKwCmzv9aGZ'}
    // } else {
    //   this.pricingList.adult1 = {price: 432, stripeKey: 'price_1ITNQdHRhoOpWeKwQh9IfFIa'}
    //   this.pricingList.adult3 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKwdyiQoif1'}
    //   this.pricingList.student1 = {price: 480, stripeKey: 'price_1ITNQdHRhoOpWeKw4hxuhBji'}
    //   this.pricingList.student3 = {price: 576, stripeKey: 'price_1ITNQdHRhoOpWeKwNQB8WlB1'}
    // }
    this.changePricing()
  }
}

export interface PricingPlan {
  price: number
  originPrice: number
  stripeKey: string
}
