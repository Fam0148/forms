import { Component } from '@angular/core';
import { MockData } from './MockData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  password: string = '';
  loginAttempt: string | null = null;

  onSubmit() {

    const mockUsers = MockData.users;
    const foundUser = mockUsers.find(user => user.username === this.username && user.password === this.password);

    if (foundUser) {
      this.loginAttempt = `Successful login for user ${foundUser.username}`;
    } else {
      this.loginAttempt = `Invalid username or password`;
    }
  }
}
