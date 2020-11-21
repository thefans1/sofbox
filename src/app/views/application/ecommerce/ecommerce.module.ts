import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductComponent } from './product/product.component';
import {SofboxModule} from '../../../components/sofbox/sofbox.module';
import { ItemDetailComponent } from './itemdetail/itemdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [ProductComponent,ItemDetailComponent, CheckoutComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SofboxModule,
    SlickCarouselModule
  ],
  exports: [ProductComponent,ItemDetailComponent,CheckoutComponent] 
})
export class EcommerceModule { }
