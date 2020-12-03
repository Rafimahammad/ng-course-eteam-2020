import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<object>) {
    console.log(this.viewContainerRef); // div
    console.log(this.templateRef); // p

    const isAuth = true;

    if (isAuth) {
      // if true -- the para would be inside the div
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      // if not true-- the div would not have anything inside
      this.viewContainerRef.clear();
    }
  }

}
