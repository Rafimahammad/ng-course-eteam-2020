import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .brownText {
        color: red
      }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // string interpolation
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;

  // property binding
  averageExp = 2;

  // for ngstyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black',
  };

  // text = 'click Me';
  // two way binding type
  courseName = 'angular';

  dataReceivedFromChildComp: string;

  // if static true  --  the data would be available in ngoninit lifecycle hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false -- the data would be avilable in ngAterViewInit lifecycle hook
  // @viewChild(CebComponent, { static: flase }) cebData: CebComponent;

  // *ngIf related
  isLoggedIn: boolean;

  // *ngFor related
  skillList: string[] = [
    'HTML', 'CSS', 'JavaScript'
  ];

  // ngSwitch
  person = 'Vijay';

  constructor() {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit');
    console.log(this.cebData);
  }

  // event binding related

  clickMeHandler(): void {
    alert('clicked');
  }

  // changeText(): void {
  //   this.text = 'clicked';
  // }

  changeEventHandler(event: any): void {
    console.log(event);
    event.target.innerText = 'Clicked';
    event.target.disabled = true;
  }

  profileLodedHandler(event: any): void {
    // step 5: display it somewhere in parent component
    alert('inside parent comp');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }


}
