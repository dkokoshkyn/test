webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_pagesMapper__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_main_data_main_data__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, events, platform, mainData) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.platform = platform;
        this.mainData = mainData;
        this.pageSize = 5; //length of contentData array or more
        this.descriptionText = "I'm a Front End Developer based in Vaughn, Ontario.  Currently, I specialize in hybrid application development with Angular 4, Ionic 3, RXJS, Typescript and SCSS.  I'm also familiar with PHP, jQuery, SQL, React, Responsive Web Design, Photoshop and many other things.";
        this.errorContent = { status: 0, statusText: '' };
        this.displayError = false;
        this.contentData = [];
        this.onGetContentData();
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.ionViewDidEnter = function () {
        if (this.isMobile) {
            var switchON = true;
            this.events.publish("event:homepage:mobile", switchON);
        }
    };
    HomePage.prototype.ionViewDidLeave = function () {
        if (this.isMobile) {
            var switchON = true;
            this.events.publish("event:homepage:mobileleft", switchON);
        }
    };
    HomePage.prototype.doInfinite = function (e) {
        var _this = this;
        setTimeout(function () {
            _this.pageSize = _this.contentData.length;
            _this.showInfiniteScroll = false;
            e.complete();
        }, 500);
    };
    HomePage.prototype.onGetContentData = function () {
        var _this = this;
        this.mainData.getContentData().subscribe(function (response) {
            if (response && response.status == 200) {
                _this.displayError = false;
                console.log("content data success", response.json());
                _this.contentData = response.json();
                if (_this.contentData) {
                    _this.pageSize = _this.isMobile ? Math.round((_this.contentData.length / 2)) : _this.contentData.length;
                    _this.showInfiniteScroll = _this.isMobile ? true : false;
                }
                else {
                    console.log('data loading error');
                }
            }
        }, function (error) {
            console.log("content data", error);
            _this.displayError = true;
            _this.errorContent = {
                status: error.status,
                statusText: error.statusText
            };
        });
    };
    HomePage.prototype.navigateTo = function (pageName, fab) {
        var page = Object(__WEBPACK_IMPORTED_MODULE_2__utilities_pagesMapper__["a" /* pagesMapper */])(pageName);
        this.navCtrl.push(page);
        if (fab !== undefined) {
            fab.close();
        }
    };
    Object.defineProperty(HomePage.prototype, "isMobile", {
        get: function () {
            return (this.platform.is('mobile') || this.platform.is('mobileweb')) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.redirectUser = function () {
        window.open("http://www.linkedin.com/in/dmitri-kokoshkyn-a9a182145", '_blank');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\personalsite\site1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Dmitri Kokoshkyn\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n <ion-content> \n  <ion-grid padding>\n    <ion-row>\n      <ion-col text-left col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 >\n        <p *ngIf="descriptionText" class="description">{{descriptionText}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="displayError">\n        <p>{{errorContent.status}}</p>\n        <p>{{errorContent.statusText}}</p>\n      </ion-col>\n      <ion-col *ngIf="contentData" text-left col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 class="content-list" align-self-center>\n        <h5>Recent Projects</h5>\n        <ion-list *ngFor="let content of contentData | slice :0: pageSize">\n          <ion-item mode="ios">\n            <ion-thumbnail item-start>\n              <img src="{{content.graphic}}">\n              </ion-thumbnail>\n              <h6>{{content.title}}</h6>\n              <p>{{content.text}}</p>\n              <a href="{{content.link}}" target="_blank">{{content.link}}</a>\n          </ion-item>\n        </ion-list>\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content *ngIf="showInfiniteScroll" loadingSpinner="bubbles" loadingText="Loading more data...">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab bottom right #fab>\n      <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab (click)="navigateTo(\'ContactPage\', fab)"><ion-icon class="active-button" name="contact"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <div text-center>\n        <ion-icon name="logo-linkedin" (click)="redirectUser()">\n        </ion-icon>\n      </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\personalsite\site1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_main_data_main_data__["a" /* MainDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_email_post_email_post__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Contact Page.
 * Includes Contact Info and a Submit Form
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, emailPostProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailPostProvider = emailPostProvider;
        this.loadingCtrl = loadingCtrl;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.ngOnInit = function () {
        this.infoForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fullName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            comments: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
        });
        this.fullName = this.infoForm.get('fullName');
        this.email = this.infoForm.get('email');
        this.phoneNumber = this.infoForm.get('phoneNumber');
        this.comments = this.infoForm.get('comments');
    };
    ContactPage.prototype.clearForm = function () {
        this.infoForm.reset();
    };
    ContactPage.prototype.onSubmit = function () {
        var _this = this;
        console.log("form value submitted: ", this.infoForm.value);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.emailPostProvider.sendEmail(this.infoForm.value).subscribe(function (response) {
            console.log("response: ", response);
            _this.emailResponceMessage = response._body;
            _this.clearForm();
            if (loading) {
                loading.dismiss();
            }
        }, function (error) {
            console.log("error: ", error);
            _this.emailResponceMessage = error;
            _this.clearForm();
            if (loading) {
                loading.dismiss();
            }
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\xampp\htdocs\personalsite\site1\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact me</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col text-left col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 >\n          <p class="description">Send me an email at <span class="highlight">d.kokoshkyn@gmail.com</span> or submit the form below.</p>\n          <form novalidate [formGroup]="infoForm" (submit)="onSubmit()">\n              <ion-list>\n                  <ion-item>\n                      <ion-label stacked>*Full Name:</ion-label>\n                      <ion-input type="text" formControlName="fullName"></ion-input>\n                  </ion-item>\n                  <ion-item ion-item *ngIf="fullName.errors?.required && fullName.dirty && fullName.touched" class="input-error">>\n                      <p>Please enter your Name.</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label stacked>*Email:</ion-label>\n                      <ion-input type="text" formControlName="email"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="(email.invalid && email.dirty && email.touched) || (email.errors?.required && email.dirty && email.touched)" class="input-error">\n                      <p>Please a valid email address.</p>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label stacked>Phone:</ion-label>\n                      <ion-input type="text" formControlName="phoneNumber"></ion-input>\n                  </ion-item>\n                  <ion-item>\n                      <ion-label stacked>*Comments:</ion-label>\n                      <ion-input type="textarea" formControlName="comments"></ion-input>\n                  </ion-item>\n                  <ion-item ion-item *ngIf="comments.errors?.required && comments.dirty && comments.touched" class="input-error">>\n                      <p>Please enter your Comments.</p>\n                  </ion-item>\n              </ion-list>\n              <ion-row>\n                  <ion-col text-left>\n                      <button ion-button [disabled]="infoForm.invalid" color="secondary">Submit</button>\n                  </ion-col>\n              </ion-row>\n          </form>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="emailResponceMessage">\n          <ion-col>\n              {{emailResponceMessage}}\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\personalsite\site1\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_email_post_email_post__["a" /* EmailPostProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EmailPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmailPostProvider = /** @class */ (function () {
    function EmailPostProvider(http) {
        this.http = http;
        console.log('Hello EmailPostProvider Provider');
        this.URL = 'email.php';
    }
    EmailPostProvider.prototype.sendEmail = function (data) {
        var payload = data;
        return this.http.post(this.URL, payload);
    };
    EmailPostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], EmailPostProvider);
    return EmailPostProvider;
}());

//# sourceMappingURL=email-post.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pagesMapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_contact_contact__ = __webpack_require__(101);


var pagesMapper = function (className) {
    var classFactory = {
        "HomePage": __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
        "ContactPage": __WEBPACK_IMPORTED_MODULE_1__pages_contact_contact__["a" /* ContactPage */]
    };
    if (className in classFactory) {
        return classFactory[className];
    }
    else {
        console.log("No page class match for " + className);
    }
};
//# sourceMappingURL=pagesMapper.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MainDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MainDataProvider = /** @class */ (function () {
    function MainDataProvider(http) {
        this.http = http;
        console.log('Hello MainDataProvider Provider');
    }
    MainDataProvider.prototype.getContentData = function () {
        return this.http.get('assets/data/content.json');
    };
    MainDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], MainDataProvider);
    return MainDataProvider;
}());

//# sourceMappingURL=main-data.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_email_post_email_post__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_main_data_main_data__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_email_post_email_post__["a" /* EmailPostProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_main_data_main_data__["a" /* MainDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_pagesMapper__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.menuLinks = [
            { title: 'Contact', icon: 'contact', pageName: 'ContactPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
        //this.nav.setRoot(page.component);
    };
    MyApp.prototype.navigateTo = function (pageName) {
        var page = Object(__WEBPACK_IMPORTED_MODULE_5__utilities_pagesMapper__["a" /* pagesMapper */])(pageName);
        this.nav.push(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\personalsite\site1\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let link of menuLinks" (click)="navigateTo(link.pageName)">\n        <ion-icon name={{link.icon}}></ion-icon>\n          {{link.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\personalsite\site1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map