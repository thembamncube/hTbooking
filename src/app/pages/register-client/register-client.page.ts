
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.page.html',
  styleUrls: ['./register-client.page.scss'],
})
export class RegisterClientPage implements OnInit {
  isSignedIn = false
  constructor(public firebaseService : FirebaseService,
    public router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
  }
  async onSignUp(email :string, password: string){
    await this.firebaseService.signUp(email,password)
    if(this.firebaseService.isLoggedIn)
    this.router.navigate(["login"]);
  }
  

}
