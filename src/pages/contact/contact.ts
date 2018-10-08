import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EmailPostProvider } from './../../providers/email-post/email-post';
import { LoadingController } from 'ionic-angular';

/**
 * Contact Page.
 * Includes Contact Info and a Submit Form
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  public infoForm: FormGroup;
  public fullName: AbstractControl;
  public email: AbstractControl;
  public phoneNumber: AbstractControl;
  public comments: AbstractControl;
  public emailResponceMessage:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public emailPostProvider:EmailPostProvider,
    private loadingCtrl: LoadingController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ngOnInit() {
    this.infoForm = new FormGroup(
      {
          fullName: new FormControl('', [Validators.required]),
          email: new FormControl('', [
            Validators.pattern('^([0-9a-zA-Z]+[-._+&amp;])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$'),
            Validators.required
          ]),
          phoneNumber: new FormControl(''),
          comments: new FormControl('', [Validators.required])
      }
    );
    this.fullName = this.infoForm.get('fullName');
    this.email = this.infoForm.get('email');
    this.phoneNumber = this.infoForm.get('phoneNumber');
    this.comments = this.infoForm.get('comments');
  }

  clearForm() {
    this.infoForm.reset();
  }

  onSubmit() {
    console.log("form value submitted: ",this.infoForm.value);
    
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.emailPostProvider.sendEmail(this.infoForm.value).subscribe(
      (response:any)=> {
        console.log("response: ", response);
        this.emailResponceMessage = response._body;
        this.clearForm();
        if(loading) { 
          loading.dismiss(); 
        }
    },
      (error)=> {
        console.log("error: ", error);
        this.emailResponceMessage = error;
        this.clearForm();
        if(loading) { 
          loading.dismiss(); 
        }
      }
    );
  }
}
