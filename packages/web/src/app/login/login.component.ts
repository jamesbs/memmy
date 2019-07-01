import { Component, Input } from '@angular/core';
import { LoginCredentials } from '@memmy/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() login: LoginAction;
}

export type LoginAction = (credentials: LoginCredentials) => void;
