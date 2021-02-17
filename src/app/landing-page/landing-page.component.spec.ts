import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BooksjsonService } from '../services/booksjson.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { By } from '@angular/platform-browser';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let Service: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent,
        FilterPipe ],
      imports:[
        FormsModule,
        ReactiveFormsModule
      ],
      providers:[{
        provide: BooksjsonService, useClass: mockService
      }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Service = TestBed.get(BooksjsonService);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    component.booksData= [
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
            }
          ]
        }
      ];
    expect(component).toBeTruthy();
  });

  it('should get data',() =>{
    //component.searchText="boook1";
    spyOn(component,"onFilter");
    let inputEl = fixture.debugElement.query(By.css("#book1")).nativeElement;
    inputEl.click();
    fixture.detectChanges();
    expect(component.onFilter).toHaveBeenCalledTimes(1);
    //console.log( component.booksData.length);
    //expect(filter).toHaveBeenCalled();
  });
  it('shod check local storage',()=>{
    const data=[
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
  
    localStorage.setItem('filters',JSON.stringify(data));
    
    
  })
});


class mockService{
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
          }
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
          }
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
          }
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
          }
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
          }
        ]
      }
    ];
  }

}

class mockPipe{

}