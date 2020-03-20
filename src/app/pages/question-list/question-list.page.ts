import { Component, OnInit } from '@angular/core';
import {DataService} from "../../bo/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  constructor(public data: DataService,
              public route: Router) { }

  ngOnInit() {
  }
  show(id: string){
    this.route.navigate(['/question']);
  }
}
