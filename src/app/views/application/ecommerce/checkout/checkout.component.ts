import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  placeOrder() {
    jQuery('#cart').removeClass('show');
    jQuery('#address').addClass('show');
    jQuery('#step1').removeClass('active');
    jQuery('#step1').addClass('done');
    jQuery('#step2').addClass('active');
  }

  // jQuery('#place-order').click(function(){
  // });
  deliverAddress() {
    // jQuery('#deliver-address').click(function(){
    // });
        jQuery('#address').removeClass('show');
        jQuery('#payment').addClass('show');
        jQuery('#step2').removeClass('active');
        jQuery('#step2').addClass('done');
        jQuery('#step3').addClass('active');
  }

}
