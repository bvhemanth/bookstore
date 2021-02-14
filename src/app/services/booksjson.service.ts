import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksjsonService {

  constructor() { }

  getData(){
    return [
      {name: 'book1', cost:40, pageCount:200},
      {name: 'book2', cost:50, pageCount:340},
      {name: 'book3', cost:70, pageCount:450},
      {name: 'book4', cost:20, pageCount:260},
      {name: 'book5', cost:80, pageCount:240},
      {name: 'book6', cost:80, pageCount:200},
      {name: 'book7', cost:35, pageCount:780},
      {name: 'book8', cost:68, pageCount:600},
      {name: 'book9', cost:29, pageCount:137},
    ]
  }

}
