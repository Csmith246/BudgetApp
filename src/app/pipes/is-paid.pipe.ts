import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPaid'
})
export class IsPaidPipe implements PipeTransform {

  transform(value: Boolean, args?: any): string {
    return value ? "Paid" : "Not Paid";
  }

}
