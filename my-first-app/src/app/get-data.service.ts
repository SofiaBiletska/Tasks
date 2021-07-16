import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  signIn(ulogin:string, upassword:string) {
    let userKeys = {
      "type": "",
      "sp": "",
      "uid":`${ulogin}`,
      "pwd":`${upassword}`
    };
    return new Promise(resolve=>{this.http.post<any>('url', userKeys).subscribe(response => {
      this.http.get<any>('/api',{headers: {authorization: `UDSLongToken ${response.uds}`}}).subscribe(list => {
      resolve(list.data.items);
      })
    })
  })
  }
}
