import { Component } from '@angular/core';
import { NavController,ModalController,ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	toDoList=[

	]

	constructor(public navCtrl: NavController , public modalCtrl: ModalController, public toastCtrl: ToastController, 
		public dataProv: DataProvider) 
	{ }





	ionViewDidLoad(){

		 this.dataProv.getItems().then(val=>{
		 	if (val){
		 		this.toDoList = val
		 	}
		 	else{
		 		this.toDoList= []
		 	}
		 })
	}


	openForm(){
		let modal = this.modalCtrl.create("FormPage");
		modal.onDidDismiss(data =>{
			if(data){
				this.toDoList.push(data)
				this.dataProv.addItem(data)
			}
		})
		modal.present();
	}
	openDetail(item){
		this.navCtrl.push('DetailsPage', {item:item})
	}

	deleteItem(item){
		let index: number = this.toDoList.indexOf(item);
		if(index > -1){
			this.toDoList.splice(index, 1);
		}
	}

	donePressed(item){

		for(var i=0; i<this.toDoList.length; i++){
			if(item.name == this.toDoList[i].name){
				this.toDoList[i].completed=! this.toDoList[i].completed
				break
			}
		}
	}
	editPressed(item){
		let index: number= this.toDoList.indexOf(item)
		let modal = this.modalCtrl.create("FormPage",{item:item});
		modal.onDidDismiss(data =>{
			if(data){
				this.toDoList.splice(index,1)
				this.toDoList.splice(index,0,item)
			}
		})
		modal.present();
	}

}




