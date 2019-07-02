import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LoginCredentials } from '@memmy/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Input() login: LoginAction;
}

export type LoginAction = (credentials: LoginCredentials) => void;
