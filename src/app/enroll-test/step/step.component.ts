import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material/stepper';
import {SheetService} from '../../../utils/sheet.service';
import {loadStripe} from '@stripe/stripe-js/pure';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @ViewChild('stepper')
  public myStepper: MatStepper;

  userInfoFormGroup: FormGroup;
  userInfo2FormGroup: FormGroup;
  testInfoFormGroup: FormGroup;
  summaryFormGroup: FormGroup;
  chooseTestLevel = 0
  stripe: any

  constructor(private formBuilder: FormBuilder, public sheetService: SheetService) {
  }

  async ngOnInit() {
    this.userInfoFormGroup = this.formBuilder.group({
      Email: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      Chinese_Name: new FormControl('', Validators.required),
      Nationality: new FormControl('', Validators.required),
      Mother_Tongue: new FormControl('', Validators.required),
    });
    this.userInfo2FormGroup = this.formBuilder.group({
      Birth_Date: new FormControl('', Validators.required),
      Belong_To: new FormControl(''),
      Learning_For: new FormControl('', Validators.required),
      Reason: new FormControl('', Validators.required),
      Known_From: new FormControl('', Validators.required),
    });

    this.testInfoFormGroup = this.formBuilder.group({
      Test_Date: new FormControl(''),
    });
    this.summaryFormGroup = this.formBuilder.group({
        agree: new FormControl('', Validators.required)
      }
    )

    setTimeout(() => {
      // this.myStepper.selectedIndex = 3
    }, 1000)
    this.stripe = await loadStripe('pk_live_Pz4r4nqTVPSZC1Puk1lOBL0l');
  }

  payment() {
    const formData = {
      ...this.userInfoFormGroup.getRawValue(),
      ...this.userInfo2FormGroup.getRawValue(),
      ...{Test_Level: this.chooseTestLevel},
      ...{Booking_Id: this.userInfoFormGroup.get('Email')?.value + Date.now().toString()}
    }
    this.sheetService.addRow(formData)
      .subscribe(res => {
        this.stripe.redirectToCheckout({
          lineItems: [{price: environment.stripe_product_enroll_test, quantity: 1}],
          customerEmail: this.userInfoFormGroup.get('Email')?.value,
          mode: 'payment',
          successUrl: window.location.href + '?action=pay' + '&plan=' + environment.stripe_product_enroll_test,
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

  mockStripePay() {
    console.log('mockStripePay')
    const postData = {
      "id": "ppage_1J523rHRhoOpWeKwz2amdc40",
      "account_settings": {
        "account_id": "acct_1Ci46YHRhoOpWeKw",
        "assets": {
          "icon": "https://stripe-camo.global.ssl.fastly.net/0f56c525cdbeb0d7781e769613967cc324605a6da875cb1f4051a3f7e1c800ae/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a6446387851326b304e6c6c49556d6876543342585a55743366475a6662476c325a563970616a6c454d577074566b39616246563157546861545842495744413554576f303067496b3363336a69",
          "logo": null,
          "use_logo": false
        },
        "branding": {
          "background_color": "#ffffff",
          "button_color": "#51c0dc"
        },
        "country": "US",
        "display_name": "Ponddy Education Inc.",
        "privacy_policy_url": null,
        "support_email": "support@ponddy-edu.com",
        "support_phone": "4088007798",
        "support_url": "http://support.ponddy.com",
        "terms_of_service_url": null
      },
      "billing_address_collection": null,
      "cancel_url": "http://127.0.0.1:4200/enrollTest",
      "card_brands": {
        "amex": true,
        "diners": true,
        "discover": true,
        "elo": false,
        "jcb": true,
        "mastercard": true,
        "unionpay": true,
        "visa": true
      },
      "client_reference_id": "Lance@ponddy-edu.com1624339327619",
      "currency": "usd",
      "customer": {
        "id": "cus_JiT3ebJjvtb7wZ",
        "object": "customer",
        "email": "Lance@ponddy-edu.com",
        "payment_methods": []
      },
      "customer_email": "Lance@ponddy-edu.com",
      "disabled_third_party_wallets": [],
      "eid": "NA",
      "enforcement_mode": "open",
      "feature_flags": {
        "checkout_acss_verification_ui_enabled": true,
        "checkout_passthrough_coupon": true,
        "checkout_stripepass_enabled": true,
        "checkout_new_mobile_details": true,
        "checkout_favorable_policies_enabled": true,
        "checkout_eps_bank_param_enabled": true,
        "checkout_p24_bank_param_enabled": true,
        "checkout_adjustable_quantities_enabled": true,
        "checkout_pm_reuse_enabled": true,
        "checkout_autofocus_input_enabled": true
      },
      "geocoding": {
        "country_code": "TW",
        "region_name": null
      },
      "has_dynamic_tax_rates": false,
      "line_item_group": {
        "currency": "usd",
        "discount_amounts": [],
        "line_items": [
          {
            "id": "li_1J523rHRhoOpWeKwNqewqsPL",
            "object": "item",
            "adjustable_quantity": null,
            "description": null,
            "discount_amounts": [],
            "images": null,
            "is_climate_contribution": false,
            "name": "Ponddy HSK Test",
            "price": {
              "id": "price_1IQomRHRhoOpWeKwWHN5nFdy",
              "object": "price",
              "active": true,
              "billing_scheme": "per_unit",
              "currency": "usd",
              "livemode": true,
              "product": {
                "id": "prod_J2ubwbMStWiJ5p",
                "object": "product",
                "active": true,
                "attributes": [],
                "description": null,
                "images": [],
                "livemode": true,
                "name": "Ponddy HSK Test",
                "unit_label": null,
                "url": null
              },
              "recurring": null,
              "tiers_mode": null,
              "transform_quantity": null,
              "type": "one_time",
              "unit_amount": 100,
              "unit_amount_decimal": "100"
            },
            "quantity": 1,
            "subtotal": 100,
            "tax_amounts": [],
            "total": 100
          }
        ],
        "shipping_rate": null,
        "subtotal": 100,
        "tax_amounts": [],
        "total": 100
      },
      "livemode": true,
      "locale": null,
      "mode": "payment",
      "ordered_payment_method_types": [
        "card"
      ],
      "payment_intent": {
        "id": "pi_1J523rHRhoOpWeKwExwim3Mo",
        "object": "payment_intent",
        "allowed_source_types": [
          "card"
        ],
        "amount": 100,
        "canceled_at": null,
        "cancellation_reason": null,
        "capture_method": "automatic",
        "client_secret": "pi_1J523rHRhoOpWeKwExwim3Mo_secret_4mW3Cu0u3hwEdRHOWhfDoSHyx",
        "confirmation_method": "automatic",
        "created": 1624339331,
        "currency": "usd",
        "description": "1x Ponddy HSK Test",
        "last_payment_error": null,
        "livemode": true,
        "next_action": null,
        "next_source_action": null,
        "payment_method": "pm_1J527XHRhoOpWeKwzPPXRgQJ",
        "payment_method_types": [
          "card"
        ],
        "receipt_email": "Lance@ponddy-edu.com",
        "setup_future_usage": null,
        "shipping": null,
        "source": null,
        "status": "succeeded"
      },
      "payment_method_options": {
        "card": {
          "installments": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": [
        "card"
      ],
      "policies": {
        "contacts": {
          "display_email": true,
          "display_phone": true,
          "display_url": true,
          "enabled": false
        },
        "legal": {
          "agreement_required": false,
          "enabled": false
        },
        "returns": {
          "custom_message": null,
          "enabled": false,
          "exceptions_apply": false,
          "exchanges_accepted": false,
          "fee_required": null,
          "fee_type": null,
          "logistics": [],
          "policy_url": null,
          "refunds_accepted": null,
          "returns_accepted": null,
          "window": null,
          "window_start": null
        }
      },
      "session_id": "cs_live_a1Kmpmlvv4uok3S8H7ICTPUsQD2K6UR6nJwEHaz22jGtnCyPjJYHo95lgj",
      "setup_intent": null,
      "shipping_address_collection": null,
      "state": "succeeded",
      "submit_type": null,
      "subscription_data": null,
      "success_url": "http://127.0.0.1:4200/enrollTest?action=pay&plan=price_1IQomRHRhoOpWeKwWHN5nFdy",
      "tax_context": {
        "automatic_tax_address_source": null,
        "automatic_tax_enabled": false,
        "automatic_tax_error": null,
        "automatic_tax_exempt": null,
        "customer_tax_country": null,
        "dynamic_tax_enabled": false,
        "has_maximum_tax_ids": false,
        "tax_id_collection_enabled": false
      },
      "tax_meta": {
        "computation_type": "manual",
        "customer_tax_exempt": null,
        "error_reason": null,
        "status": null
      },
      "use_payment_methods": true
    }
    this.sheetService.addAsStripePay(postData)
      .subscribe(res => console.log)
  }
}
