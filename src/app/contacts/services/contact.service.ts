import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // singleton
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Create
  createContact(contactFormData: Contact): Promise<Contact> | Promise<any> { // 1. get the data from the comp ts
    console.log(contactFormData);

    // // 2. send the data to the rest api backend
    // // 2.1. what's the rest api url? - http://jsonplaceholder.typicode.com/users
    // // 2.2. what's the http method? - POST
    // // 2.3. What's the tool we have to use to sent the above data? - HttpClient
    // return this.http.post(this.REST_API_URL, contactFormData)
    //   .pipe(map((res: any) => { // 3. get the resp from the rest api backend
    //     console.log(res);
    //     return res;     // 4. send it back to the comp ts
    //   }));

    // http promise method
    const createContactPromise = new Promise((resolve, reject) => {

      this.http.post(this.REST_API_URL, contactFormData)
        .toPromise()
        .then((res: Contact) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('It is over!');
        });

    });
    return createContactPromise as Promise<Contact> | Promise<any>;
  }

  // Listing all contacts
  getContacts(): Observable<Contact[]> { // 1. get the req from comp.ts
    // 2. send the req to the rest api
    // 2.1. what's the rest api url? - http://jsonplaceholder.typicode.com/users
    // 2.2. what's the http method? - GET
    // 2.3. What's the tool we have to use to sent the above data? - HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => { // 3. get the resp from the rest api backend
        console.log(res);
        // filter, convert, merge, sort,
        return res;     // 4. send it back to the comp ts
      }));
  }

  // Contact Details
  getContactById(id: string): Observable<Contact> {
    return this.http.get(this.REST_API_URL + '/' + id)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  // Update Contact

  updateContact(contactData: Contact): Observable<Contact> {
    const URL = this.REST_API_URL + '/' + contactData.id;
    return this.http.put(URL, contactData)
      .pipe(map((res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  // Delete Contact

  deleteContact(contactData: Contact): Observable<Contact> {
    // const URL = this.REST_API_URL + '/' + contactData.id;
    return this.http.delete(this.REST_API_URL + '/' + contactData)
    .pipe(map((res: Contact) => {
      console.log(res);
      return res;
    }));

  }
}
