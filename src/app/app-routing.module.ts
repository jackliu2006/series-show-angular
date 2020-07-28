import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeriesListViewComponent} from "./series-list-view/series-list-view.component"
import {EpicListViewComponent} from "./epic-list-view/epic-list-view.component"

const routes: Routes = [
  { path: 'series-list-view', component: SeriesListViewComponent },
  { path: 'epic-list-view', component: EpicListViewComponent },
  { path: 'epic-list-view/:seriesID', component: EpicListViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
