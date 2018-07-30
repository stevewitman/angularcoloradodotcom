import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  itemList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase ) { }

  getData() {
    this.itemList = this.firebase.list('items');
    return this.itemList;
  }

  insertItem(item: Item) {
    this.getData();
    this.itemList.push(item);
  }
}
