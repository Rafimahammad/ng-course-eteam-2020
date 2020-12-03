import { ViewEncapsulation } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item footerMenu">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="redText">Copyright 2020 | Rafi</p>
      <p class="happyText">Happily developed during a training in Nov 2020</p>
    </div>
  `,
  styles: [
    `
    .happyText{
      color: teal;
      font-size: 12px;
    }
    `
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
