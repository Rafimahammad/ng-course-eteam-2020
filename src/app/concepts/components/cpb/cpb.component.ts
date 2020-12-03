import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  @Input() age = '24'; // @Input() makes age as custom property -- so that you can do custom prop binding
  constructor() { }

  ngOnInit(): void {
  }

}
