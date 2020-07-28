import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesListViewComponent } from './series-list-view/series-list-view.component';
import { EpicListViewComponent } from './epic-list-view/epic-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesListViewComponent,
    EpicListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
