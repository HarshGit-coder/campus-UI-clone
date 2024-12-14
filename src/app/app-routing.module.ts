import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
 {path: '', redirectTo:'home', pathMatch: 'full'},
{ path: 'home', component: MainComponent},
{ path: 'stores', component: StoresComponent},
{ path: 'track-order', component: TrackOrderComponent},
{ path: 'cart', component: CartComponent},
{ path: 'wishlist', component: WishlistComponent},
{ path: 'Account', component: AccountComponent},
{ path: 'sale', component: SaleComponent},
{ path: 'new-arrivals', component: NewarrivalsComponent},
{ path: 'men', component: MenComponent},
{ path: 'women', component: WomenComponent},
{ path: 'kids', component: KidsComponent},
{ path: 'trending', component: TrendingComponent},
{ path: 'collections', component: CollectionsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
