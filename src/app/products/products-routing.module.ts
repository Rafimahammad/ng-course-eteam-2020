import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';

// setting up Feature Routing
const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: ':id', component: ProductDetailsComponent } // id is URL Param
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registring routes
  ],
   exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
