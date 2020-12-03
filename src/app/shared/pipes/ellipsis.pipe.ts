import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis' // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  // transform info from one format to another
  transform(value: string, args: number): unknown {

    console.log(value);
    console.log(args);
    value = value.substr(0, args);
    return value + '...';
  }

}
