import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent implements OnInit {

  cartItemsList: any[];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe((cartItems: any[]) => {
      console.log('shopping cart', cartItems);
      this.cartItemsList = cartItems;
    });
  }

}
