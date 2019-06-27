import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  login() {
    const credentials = this.loginService.login({
      username: 'blah',
      password: 'blah',
    });

    if(credentials) {
      this.router.navigate(['dashboard']);
    }
  }

}
