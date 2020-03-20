import { Component } from '@angular/core';
import {DataService} from "../../bo/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private data: DataService,
              private router: Router) {
    console.log(data.currentQuiz);
  }

  public showList() {
    this.router.navigate(['/question-list'])
  }
}
