import { Component, OnInit } from '@angular/core';
import { BooksjsonService } from '../services/booksjson.service';
interface booksDetails{
  name?;
  profile?
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  displayCards:booksDetails[];
  cards;
  booksData:booksDetails[];
  displayBooks:booksDetails[];
  searchText='';
  filter={}
  date;
  count;

  options = [
    {
      title: "Book",
      data: [
        { name: "book1", value: "book1", checked: false },
        { name: "book2", value: "book2", checked: false },
        { name: "book3", value: "book3", checked: false },
        { name: "book4", value: "book4", checked: false },
        { name: "book5", value: "book5", checked: false },
        { name: "book6", value: "book6", checked: false }
      ]
    },
    {
      title: "Author",
      data: [
        { name: "Hemanth", value: "Hemanth", checked: false },
        { name: "Rama", value: "Rama", checked: false },
        { name: "Krishna", value: "Krishna", checked: false },
        { name: "Chethan", value: "Chethan", checked: false }
      ]
    },
    {
      title: "Page Count",
      data: [{ name: "count", value: "0", checked: false }]
    },
    {
      title: "Published Date",
      data: [{ name: "published", value: "2021-02-15", checked: false }]
    }
  ];

  constructor(private books: BooksjsonService) { }

  ngOnInit(): void {
    this.booksData=this.books.getData();
    this.cards=this.booksData;
    this.displayCards =this.booksData;
    let localState=localStorage.getItem("filters");
    let localDate=localStorage.getItem("date");
    let localCount=localStorage.getItem("count");
    if(localState){
      this.options=JSON.parse(localState);
      this.onFilter()
    }
    if(localDate){
      this.date=localDate;
    }
    if(localCount){
      this.date=localCount;
    }
  }

  onFilter() {
    this.searchText='';
    let data: any = [];
    let checked=0;
    for (let i = 0; i < this.options.length; i++) {
      for (var j = 0; j < this.options[i].data.length; j++) {
        if (this.options[i].data[j].checked) {
          checked++;
          data.push(this.options[i].data[j].name);
        }
      }
    }
    
    if (this.date) {
      checked++;
      data.push(this.date);
    }
    if(this.count){
      checked++;
      data.push(this.count);
    }
    console.log(data);
    if(checked)
    {
      localStorage.setItem("filters",JSON.stringify(this.options));
      localStorage.setItem("date", this.date);
      localStorage.setItem("count", this.count);
      this.displayCards =  this.onFilterprocess(data)
    }
    else{
      localStorage.clear();
      this.displayCards = this.cards;
    }
  }

    onFilterprocess(checkedValues) {
      console.log(checkedValues);
     return this.cards.filter(card => {
      return card.profile
        .map(p => p.name)
        .find(type => {
          return checkedValues.find(checkedType => checkedType == type);
        });
    });
    }
}
