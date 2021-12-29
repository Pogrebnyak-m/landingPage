import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.email]);
  number = new FormControl('', [Validators.required, Validators.email]);
  email = new FormControl('', [Validators.required, Validators.email]);

  /*getErrorMessage() {
    return this.email.hasError('email') ? 'Некорректный адрес электронной почты' : '';
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
