import { Component, OnInit } from '@angular/core';
//import {Parser}  from 'xml2js';
import { HttpClient } from "@angular/common/http"
import { series } from "../model/series"


@Component({
  selector: 'app-series-list-view',
  templateUrl: './series-list-view.component.html',
  styleUrls: ['./series-list-view.component.css']
})
export class SeriesListViewComponent implements OnInit {

  seriesList: series[]
  httpRes: string

  constructor(private http: HttpClient) {

  }

  GetSortOrder(prop) {    
    return function(a, b) {    
        if (parseInt(a[prop]) > parseInt(b[prop])) {    
            return 1;    
        } else if (parseInt(a[prop]) < parseInt(b[prop])) {    
            return -1;    
        }    
        return 0;    
    }    
}   

  ngOnInit(): void {
    console.log("start ngOnInit() in customer list view ")
    this.http.get("http://localhost:8080/series", { observe: 'body', responseType: 'json' }).subscribe(data => {
      this.seriesList = data['Series-list'];
      this.seriesList.sort(this.GetSortOrder("SeriesID"))

      this.seriesList.forEach(element => {
        console.log(element.Actors)
      });
      
    })
  }

}

