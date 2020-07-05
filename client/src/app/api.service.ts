import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('/api/users');
  }
  getUserById(id){
    return this._http.get(`/api/users/${id}`);
  }
  getUserWithToken(){
    return this._http.get('/api/user');
  }
  deleteUser(id){
    return this._http.delete(`/api/users/${id}`);
  }
  
}
