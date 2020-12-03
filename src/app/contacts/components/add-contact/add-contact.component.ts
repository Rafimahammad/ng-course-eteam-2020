import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // step 1: Create HTML form tag equivalent in TS
  addContactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) { // 1. connect to the service - using dependency injection

  }

  ngOnInit(): void {
    // step 1: continues...
    this.addContactForm = new FormGroup({
      // step 2: Create HTML input equivalents in TS
      name: new FormControl('', Validators.required), // step 5: work on validations
      phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  // addContactHandler(): void {
  //   console.log(this.addContactForm.value);

  //   // 2.send the above data to the services
  //   this.contactService.createContact(this.addContactForm.value)
  //     .subscribe((res: any) => { // 3.get resp from the service
  //       console.log(res);
  //       if (res && res.id) {
  //         this.isSaved = true;
  //       }

  //     });
  // }

  // different style with promise
  async addContactHandler(): Promise<void> {
    console.log(this.addContactForm.value);

    // 2. send the above data to the service
    const status: Contact = await this.contactService.createContact(this.addContactForm.value);
    console.log(status);
    if (status && status.id) {
      this.isSaved = true;
    }
  }

}
