import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
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
