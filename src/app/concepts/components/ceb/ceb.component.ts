import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step 1: Create Custom event
  // 1.1 create a object of EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // 1.2 make the obj as custom event --- @output() make it a custom event

  personName = 'Rafi';


  constructor() {
    console.log('Inside CebComponent constructor');
  }

  ngOnInit(): void {
    console.log('Inside CebComponent ngOnInit');
  }

  onLoadProfile(event): void {
    event.target.innerText = 'Loading Profile...';
    // mocking an ajax call
    setTimeout(() => {
      console.log('Data sent to parent comp is: Rafi');
      event.target.innerText = 'Loaded Profile...';
      // step 2: emit that custom event thru program
      this.profileLoaded.emit(this.personName); // ste 3: Along with the emitted event, send data to the parent component
      // refer this comp's html for this step 4 if ceb
    }, 5000);
  }

}
