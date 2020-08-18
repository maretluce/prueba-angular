import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    protected http: HttpClient
    //private: _http: HttpClient
  ) { }

  //api_url: string = 'https://reqres.in/api/users'

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

}
