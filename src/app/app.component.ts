import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ModataService} from './modata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModataService]
})
export class AppComponent {
  s : string;
  //y : number;
  data:any[];
  search = '';
  searchClicked = false;
  searchHistory = [];
  constructor(private _MoDataService: ModataService) {

    
   }

gData(a) {
this.s = a;
//this.y = b;
if (this.s) {
  this.searchClicked = true;
  this.searchHistory.unshift(this.s);
  this.searchHistory.splice(5);
}


this._MoDataService.sData(this.s).subscribe((testData) => this.data=testData);
//console.log(this.s,this.y);
//console.log(this.url+'='+this.s+this.y+'&apikey=4834356c');

}

}
