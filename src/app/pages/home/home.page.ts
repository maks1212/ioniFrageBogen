import { Component } from '@angular/core';
import {DataService} from "../../bo/data.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public data: DataService,
              public navCtrl: NavController) {
    console.log(data.currentQuiz);
  }

  public showList() {
      this.navCtrl.navigateForward(['/question-list'])
  }
}
