import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  company = new FormControl('');
  text = new FormControl('');

  /*getErrorMessage() {
    return this.email.hasError('email') ? 'Некорректный адрес электронной почты' : '';
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
