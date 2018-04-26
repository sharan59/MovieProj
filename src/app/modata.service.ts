import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ModataService {
  private url="http://www.omdbapi.com/?s=";
  constructor(private _http:Http) { }


  sData(term: string): Observable<any[]> {
   
   // console.log(this.url+'='+this.s+this.y+'&apikey=4834356c');
    console.log(this.url+term+'&apikey=4834356c');
    return this._http.get(this.url+term+'&apikey=4834356c').map((res:Response)=> <any[]>res.json().Search)
  
  }
    
}
