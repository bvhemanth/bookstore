import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksjsonService {

  constructor() { }

  getData(){
    return [
      {
        name: "book1",
        profile: [
          {
            type:"book",
            name: "book1"
          },
          {
            type: "author",
            name: "Krishna"
          },
          {
            type: "published",
            name: "2021-02-15"
          },
          {
            type: "count",
            name: "100"
          },
        ]
      },
      {
        name: "book2",
        profile: [
          {
            type:"book",
            name: "book2"
          },
          {
            type: "author",
            name: "Chethan"
          },
          {
            type: "published",
            name: "2021-02-09"
          },
          {
            type: "count",
            name: "300"
          },
        ]
      },
      {
        name: "book3",
        profile: [
          {
            type:"book",
            name: "book3"
          },
          {
            type: "author",
            name: "Hemanth"
          },
          {
            type: "published",
            name: "2021-02-10"
          },
          {
            type: "count",
            name: "150"
          },
        ]
      },
      {
        name: "book4",
        profile: [
          {
            type:"book",
            name:"book4"
          },
          {
            type: "author",
            name: "Rama"
          },
          {
            type: "published",
            name: "2021-02-16"
          },
          {
            type: "count",
            name: "90"
          },
        ]
      },
      {
        name: "book5",
        profile: [
          {
            type:"book",
            name: "book5"
          },
          {
            type: "author",
            name: "Rama"
          },
          {
            type: "published",
            name: "2021-02-10"
          },
          {
            type: "count",
            name: "100"
          }
        ]
      },
      {
        name: "book6",
        profile: [
          {
            type:"book",
            name: "book6"
          },
          {
            type: "author",
            name: "Hemanth"
          },
          {
            type: "published",
            name: "2021-02-10"
          },
          {
            type: "count",
            name: "100"
          }
        ]
      }
    ];
    

  }

}
