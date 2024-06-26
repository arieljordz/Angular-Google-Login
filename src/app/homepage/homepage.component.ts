import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  auth = inject(AuthService);
  fname = JSON.parse(sessionStorage.getItem("LoginUser")!).family_name;
  lname = JSON.parse(sessionStorage.getItem("LoginUser")!).given_name;
  ImgProfile = JSON.parse(sessionStorage.getItem("LoginUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("LoginUser")!).email;

  signOut() {
    sessionStorage.removeItem("LoginUser");
    this.auth.SignOut();
  }
}
