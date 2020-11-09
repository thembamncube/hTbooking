import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.page.html',
  styleUrls: ['./signin-user.page.scss'],
})
export class SigninUserPage implements OnInit {
  isSignedIn = false
  constructor(public firebaseService : FirebaseService,
    public router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignIn(email :string, password: string){
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isLoggedIn)
    this.router.navigate(["home-screen"]);
  }
}
