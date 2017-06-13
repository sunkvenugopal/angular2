import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(people, slider) {
    // ES6 array destructuring
    let minAge = slider;
    return people.filter(pp => {
      return pp.age >= +minAge;
    });
  }

}
