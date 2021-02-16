import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BooksjsonService } from '../services/booksjson.service';
import { FilterPipe } from '../pipes/filter.pipe';

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
            }
          ]
        }
      ];
    expect(component).toBeTruthy();
  });

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