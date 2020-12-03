import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItemCount = 0;
  isLogedIn: boolean;

  constructor(private router: Router, private cartDataService: CartDataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe((cartItems: any[]) => {
      console.log(cartItems);
      if (cartItems && cartItems.length > 0) {
        this.cartItemCount = cartItems.length;
      }
    });

    if (this.authService.isAuth()) {
      this.isLogedIn = true;
      console.log('header loggedin', this.isLogedIn);
    }
    else {
      this.isLogedIn = false;
    }
  }

  gotoCartHandler(): void {
    this.router.navigate(['products', 'cart']);
    // todo: learn about navigateByUrl
  }

  loggedOut(): void {
    this.authService.logout();
  }

}
