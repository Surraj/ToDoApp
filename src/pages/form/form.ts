import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-form',
 	templateUrl: 'form.html',
 })
 export class FormPage {

 	newItem ={
 		name: '',
 		details: '',
 		startDate:'',
 		dueDate:'',
 		img_url:'',
 		completed:false
 	}

 	edited=false
 	private todo : FormGroup;

 	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, 
 				public viewCtrl: ViewController) {
 		this.todo = this.formBuilder.group({
 			item: ['', Validators.required],
 			description: [''],
 			startDate: [''],
 			dueDate: ['']
 		
 		});
 	}
 	logForm(){
 		console.log(this.todo.value)
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad FormPage');
 		if(this.navParams.get('item')){
 			this.newItem= this.navParams.get('item')
 			this.edited= true
 		}

 	}

 	addPressed(){
 		this.viewCtrl.dismiss(this.newItem)
 	}

 	closePressed(){
 		this.viewCtrl.dismiss()
 	}

 }
