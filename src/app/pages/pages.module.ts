import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';



@NgModule({
  declarations: [
    PagesComponent,
    MiscellaneousComponent,
    NotFoundComponent
  ],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
