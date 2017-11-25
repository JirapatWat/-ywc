import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  getData : any;
  constructor(private _data : ApiService){
    this.showData();
  }
  showData(){
    this._data.getData().subscribe(
      (data) => this.getData = data,
      (error) => alert(error),
      () => console.log("Complete!") 
    );
  }
  ngOnInit() {
  }
}
