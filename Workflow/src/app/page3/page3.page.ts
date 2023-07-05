import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private myserv1:Serv1Service) { }

  ngOnInit() {
  }
  onclick() {
    this.myserv1.arrayData = ['Item 1', 'Item 2', 'Item 3','Item 4'];
    console.log(this.myserv1.arrayData);
  }

}
