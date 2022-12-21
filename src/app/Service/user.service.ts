import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private https: HttpClient) {}
  ProceedLogin(inputdata: any) {
    return this.https.post('https://petstore.swagger.io/v2/pet', inputdata);
  }
  IsLoogedIn() {
    return localStorage.getItem('token') != null;
  }
  GetToken() {
    return localStorage.getItem('token') != null
      ? localStorage.getItem('token')
      : '';
  }
  Registration(inputdata:any){
    return this.https.post('https://petstore.swagger.io/v2/user', inputdata);
  }

  GetRole() {
    var token = localStorage.getItem('token');
    if (token != null) {
      var extractdata = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return extractdata.role;
    }else{
      return extractdata.role;
    }
}
}
