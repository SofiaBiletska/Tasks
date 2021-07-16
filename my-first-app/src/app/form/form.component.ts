import { GetDataService } from './../get-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  login: string = '';
  password: string = '';
  data: any;
  logIn() {
     this.getDataService.signIn(this.login, this.password).then(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  constructor(private getDataService: GetDataService) { }
}
