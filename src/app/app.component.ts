import {Component} from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import  auth  from 'firebase/compat/app';
//import { GoogleAuthProvider } from '@firebase/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
//import firebase from 'firebase/compat/app'
//import auth = firebase.auth;
//const Boom = require('@hapi/boom');
//const auth = require('firebase/compat/auth');
//const auth = require('firebase/compat/app');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-sell';

  constructor(
    public auth: AngularFireAuth,
              ) { }
  signInClicked() {
    const provider = new GoogleAuthProvider();
     this.auth.signInWithPopup(provider).then(result => {
       console.log('Usuario autenticado:', result.user);
     }).catch(error => {
       console.error('Error de autenticación:', error);
     });
   }
  signOutClicked(){
    this.auth.signOut();
  }

}
