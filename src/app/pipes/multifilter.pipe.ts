import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multifilter',
  pure: false
})
export class MultifilterPipe implements PipeTransform {

  transform(value: any[], mainFilters: any): any {
    console.log(value)
    console.log(mainFilters)
    var matchesAND = true;
   
      for (var obj in mainFilters) {
        if(mainFilters[obj].name=== 'author'){
          
          mainFilters[obj].filters.forEach(element => {
            console.log(element)

               if(element.checked){

               }
          });
        }

      }
    
    return value;

  }

}
