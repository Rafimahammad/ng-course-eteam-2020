import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// this is an attribute directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { // dependancy injection
    console.log(`Inside Constructor of Colorizer Directive`);
    console.log(this.elRef.nativeElement);

    // changing the bgcolor, color using js
    const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'yellow';
    // el.style.color = 'blue';

    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'color', 'red');

    // todo: increase the height of this div by using setStyle
    // todo: create an <p> element and have test 'Success' inside append the <p> element into the div.
    this.renderer.setStyle(el, 'height', '8rem');
    const para = document.createElement('P');
    const t = document.createTextNode('Success.');
    para.appendChild(t);
    console.log(t);
    // el.appendChild(para);
    this.renderer.appendChild(para, t);
    this.renderer.appendChild(this.elRef.nativeElement, para);
  }

  // decorator
  @HostListener('click', ['$event'])
  onBtnClick(evt: any): void {
    console.log(evt);
    this.renderer.setStyle(evt.target, 'backgroundColor', 'green');
    // alert('clicked');
  }


}
