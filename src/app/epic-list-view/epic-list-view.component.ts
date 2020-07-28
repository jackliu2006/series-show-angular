import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { epic } from '../model/epic';

@Component({
  selector: 'app-epic-list-view',
  templateUrl: './epic-list-view.component.html',
  styleUrls: ['./epic-list-view.component.css']
})
export class EpicListViewComponent implements OnInit {

  seriesID: string
  epicList: epic[]
  httpRes: string

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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
    console.log("entered epic view initial")
    this.route.params.subscribe(params => {
      this.seriesID = params['seriesID'];
    })

    this.http.get("http://localhost:8080/series/" + this.seriesID + "/epics", { observe: 'body', responseType: 'json' }).subscribe((data) => {
      this.epicList = data['Epics-list'];

     //console.log("in subscribe httpres ist:", this.httpRes)

     //this.epicList = this.httpRes

     // var arr = JSON.parse(this.httpRes);
     this.epicList.sort(this.GetSortOrder("EpisodeNumber"))

      console.log("this series list before return = ", this.epicList)
      /* this.epicList.forEach(element => {
        console.log(element.id)
      }); */

    })
  }

}
