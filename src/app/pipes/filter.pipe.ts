import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {

    if(!searchText) return value;

    searchText =searchText.toLowerCase();
    return  value.filter(data=>{
      return data.name.toLowerCase().includes(searchText);
    })
  }

}
