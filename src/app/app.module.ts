import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilter } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    UpdateComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
