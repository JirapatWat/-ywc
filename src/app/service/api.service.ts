import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  
  constructor(private _http : Http) { }
  getData(){
    return this._http.get('https://ywc15.ywc.in.th/api/interview').map( data => data.json() );
  }
}
