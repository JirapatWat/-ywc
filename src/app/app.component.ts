import { Component,OnInit,Input } from '@angular/core';
import { ApiService } from "./service/api.service";
import { HashLocationStrategy,PlatformLocation } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ProgrammingComponent } from './programming/programming.component';
import { DesignComponent } from './design/design.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MapComponent } from 'app/map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  
  constructor(){
   
  }
}
