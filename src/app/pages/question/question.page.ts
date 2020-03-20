import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../bo/interfaces";
import {DataService} from "../../bo/data.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  public question: Question;
  constructor(private route: ActivatedRoute,
              private data: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log(id, 'idddd')
    this.question = this.data.getQuestion(id)
  }

}
