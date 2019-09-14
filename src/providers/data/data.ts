import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
	items = [

	]
  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  addItem(item){
  	this.items.push(item)
  	this.storage.set('items',this.items)
  }

  getItems(){
	// this.storage.get('items').then((val =>
	// {
	// 	this.items = val
	// 	return this.items
	// }))
	return this.storage.get('items')
}

}
