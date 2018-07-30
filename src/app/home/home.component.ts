import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(1, keyframes([
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isSubmitted = false;
  inviteName = '';
  inviteEmail = '';
  timeStamp: number;
  item: Item;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.timeStamp = Date.now();
    this.item = {name: form.value.name, email: form.value.email, sent: false, timeStamp: this.timeStamp};
    this.itemService.insertItem(this.item);
    this.isSubmitted = true;
    this.inviteName = form.value.name;
    this.inviteEmail = form.value.email;
  }
}
