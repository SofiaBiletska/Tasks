import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  login: string = '';
  password:string = '';
  constructor(private http: HttpClient) { }
  logIn() {
    let userKeys = {
      login: this.login,
      password: this.password
    }
    this.http.post<any>('https://demo.onvio.us/api/auth/v2/login',JSON.stringify(userKeys)).subscribe(token => {
      console.log(token);
  })
  }
}
