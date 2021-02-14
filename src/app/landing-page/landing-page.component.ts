import { Component, OnInit } from '@angular/core';
import { BooksjsonService } from '../services/booksjson.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private books: BooksjsonService) { }

  ngOnInit(): void {
    
  }

}
