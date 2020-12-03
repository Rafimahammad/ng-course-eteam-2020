import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupInfo: any = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signupHandler(signUpFormData): void {
    console.log(signUpFormData.value);
    this.authService.signup(signUpFormData.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.token) {
          this.authService.saveToken(res.token);
          // todo: redirect the user to home page
          this.router.navigate(['login']);
        }
      });
  }

}
