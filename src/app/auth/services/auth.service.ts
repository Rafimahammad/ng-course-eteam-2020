import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // registering account
  signup(formData: any): Observable<any> {
    console.log(formData);
    return this.http.post('https://reqres.in/api/register', formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  login(formData: any): Observable<any> {
    console.log(formData);
    return this.http.post('https://reqres.in/api/login', formData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  isAuth(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // todo: complete the logout from header.comp.ts
  logout(): void {
    sessionStorage.removeItem('token');
    console.log(sessionStorage.length);
  }

}
