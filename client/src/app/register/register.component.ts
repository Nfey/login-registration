import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: { firstName: String, lastName: String, email: String, username: String, password: String, passwordConfirmation: String };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    this.user = { firstName: "", lastName: "", email: "", username: "", password: "", passwordConfirmation: "" }
  }

  register() {
    this._auth.register(this.user).subscribe(user => {
      console.log(user);
      this._auth.login(user['email'], this.user['password']).subscribe(res => {
      });
      this._router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }

}
