import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'depPipe'
})
export class DepPipePipe implements PipeTransform {

  transform(details: any, term: any): any{

      if(term === undefined) return details;

      return details.filter(function(names){
         
         return names.name.toLowerCase().includes(term.toLowerCase())   
    })
  

  }

}