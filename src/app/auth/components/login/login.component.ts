import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(loginFormData: any): void {
    console.log(loginFormData);

    this.authService.login(loginFormData.value)
      .subscribe((res: any) => {
        console.log(res);

        if (res && res.token) {
          this.authService.saveToken(res.token);
          // todo: redirect the user to home page
          this.router.navigate(['/']);
        }
      });

  }

}
