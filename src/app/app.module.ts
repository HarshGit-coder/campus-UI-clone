import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomMenuHeaderComponent } from './custom-menu-header/custom-menu-header.component';
import { MainComponent } from './main/main.component';
import { StoresComponent } from './stores/stores.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { SaleComponent } from './sale/sale.component';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { TrendingComponent } from './trending/trending.component';
import { CollectionsComponent } from './collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomMenuHeaderComponent,
    MainComponent,
    StoresComponent,
    TrackOrderComponent,
    CartComponent,
    WishlistComponent,
    AccountComponent,
    SaleComponent,
    NewarrivalsComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    TrendingComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
