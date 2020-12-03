import { Component } from '@angular/core';

// Decorator
// @Component unifies the HTML, SCSS, TS and exposes in a selector.
@Component({
  selector: 'app-root', // exposing the comp in element selector
  templateUrl: './app.component.html',  // html -- mandatory -- only one
  styleUrls: ['./app.component.scss'] // css /scss - optional -- can be multiple
})
export class AppComponent {
  title = 'contact-mgr-nov2020';
}
