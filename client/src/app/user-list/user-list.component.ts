import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  loggedInUser;
  constructor(private _api: ApiService, private _auth: AuthService) { }
  ngOnInit() {
    this._api.getUsers().subscribe(users => this.users = users);
    if (this._auth.isLoggedIn()){
      this._api.getUserWithToken().subscribe(user => {
        this.loggedInUser = user;
      });
    }
  }
}
