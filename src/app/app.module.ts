import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { routing } from './app.route';
import { HomeComponent } from './home/home.component';
import { ProgrammingComponent } from './programming/programming.component';
import { DesignComponent } from './design/design.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    ProgrammingComponent,
    DesignComponent,
    MarketingComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
