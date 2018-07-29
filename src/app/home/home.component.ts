import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.isSubmitted = true;
    this.inviteName = form.value.name;
    this.inviteEmail = form.value.email;
  }

}
