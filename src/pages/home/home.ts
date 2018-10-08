import { Component } from '@angular/core';
import { NavController,Events,Platform, FabContainer } from 'ionic-angular';
import { pagesMapper } from '../../utilities/pagesMapper';
import { MainDataProvider } from './../../providers/main-data/main-data';
import {Observable} from 'rxjs';

export interface contentDataInt {
  title: string;
  graphic: any;
  text: string;
  link: string
}

export interface errorMessage {
  status: number;
  statusText: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private contentData: Array<contentDataInt>;
  private errorContent: errorMessage;
  private displayError: boolean;
  public showInfiniteScroll:boolean;
  public descriptionText:string;
  public pageSize: number = 5;//length of contentData array or more
  constructor(
    public navCtrl: NavController, 
    public events: Events, private platform:Platform,
    private mainData:MainDataProvider
  ) {
    this.descriptionText = "I'm a Front End Developer based in Vaughn, Ontario.  Currently, I specialize in hybrid application development with Angular 4, Ionic 3, RXJS, Typescript and SCSS.  I'm also familiar with PHP, jQuery, SQL, React, Responsive Web Design, Photoshop and many other things.";
    this.errorContent = { status: 0, statusText: ''};

    this.displayError = false;
    this.contentData = [];
    this.onGetContentData();
  }
  ngOnInit() {}

  ionViewDidEnter() {
    if(this.isMobile) {
      let switchON:boolean = true;
      this.events.publish("event:homepage:mobile", switchON);
    }
  }

  ionViewDidLeave() {
    if(this.isMobile) {
      let switchON:boolean = true;
      this.events.publish("event:homepage:mobileleft", switchON);
    }
  }

  doInfinite(e) {
    setTimeout(() => {
        this.pageSize = this.contentData.length;
        this.showInfiniteScroll = false;
        e.complete();
    }, 500);
  }

  onGetContentData() {
    this.mainData.getContentData().subscribe(
      (response)=> {
        if(response && response.status == 200) {
          this.displayError = false;
          console.log("content data success", response.json());
          this.contentData = response.json();
          if(this.contentData) {
            this.pageSize = this.isMobile ? Math.round((this.contentData.length / 2)) : this.contentData.length;
            this.showInfiniteScroll = this.isMobile ? true : false;
          } else {
            console.log('data loading error');
          }
        }
      },
      (error)=> {
        console.log("content data", error);
        this.displayError = true;
        this.errorContent = {
              status: error.status,
              statusText: error.statusText
        }
      }
    );
  }

  navigateTo(pageName, fab?:FabContainer) {
    let page = pagesMapper(pageName);
    this.navCtrl.push(page);
    if (fab !== undefined) {
      fab.close();
    }
  }

  get isMobile() {
    return (this.platform.is('mobile') || this.platform.is('mobileweb')) ? true : false;
  }

  redirectUser() {
    window.open("http://www.linkedin.com/in/dmitri-kokoshkyn-a9a182145", '_blank');
  }
}
