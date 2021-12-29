import { Component, OnInit } from '@angular/core';
import {advantages} from "./advantages";

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  advantages = advantages;
  constructor() { }

  ngOnInit(): void {
  }

}
