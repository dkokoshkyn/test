import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EmailPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailPostProvider {
  private URL:string;
  
  constructor(protected http: Http) {
    console.log('Hello EmailPostProvider Provider');
    this.URL = 'email.php';
  }

  public sendEmail(data) {
      let payload = data;
      return this.http.post(this.URL, payload);
  }

}
