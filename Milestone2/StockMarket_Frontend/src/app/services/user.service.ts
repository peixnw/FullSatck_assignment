import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //post数据交互
import { environment } from '../../environments/environment' //root url
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  postLogIn(user) {
    const httpOtions = { headers: new HttpHeaders({ 'content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' }) };
    return this.http.post(`${environment.baseUrl}/login`, JSON.stringify(user), httpOtions);
  }

  public get currentUserToken(): string {
    return sessionStorage.getItem('token');
  }
}