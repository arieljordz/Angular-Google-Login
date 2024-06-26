declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '139504343985-m019sq9emnuul3vfuijlrke59986omtb.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(resp: any) {
    if (resp) {
      const payload = this.decodeToken(resp.credential);
      sessionStorage.setItem("LoginUser", JSON.stringify(payload));
      this.router.navigate(['homepage'])
    }
  }
}
