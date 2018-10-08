import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MainDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainDataProvider {

  constructor(public http: Http) {
    console.log('Hello MainDataProvider Provider');
  }

  getContentData() {
    return this.http.get('assets/data/content.json');
  }

}
