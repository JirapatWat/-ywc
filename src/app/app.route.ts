import { Router, RouterModule, Routes } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { HomeComponent } from "./home/home.component";
import { ProgrammingComponent } from 'app/programming/programming.component';
import { DesignComponent } from 'app/design/design.component';
import { MarketingComponent } from 'app/marketing/marketing.component';
import { MapComponent } from 'app/map/map.component';

const routes : Routes = [
    {path:'',component : HomeComponent},
    {path:'content',component : ContentComponent},
    {path:'programming',component : ProgrammingComponent},
    {path:'design',component : DesignComponent},
    {path:'marketing',component : MarketingComponent},
    {path:'map',component : MapComponent}
]

export const routing = RouterModule.forRoot(routes);