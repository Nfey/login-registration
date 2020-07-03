import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getUsers().subscribe(users => this.users = users);
  }

}
