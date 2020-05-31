// authentication.service.ts
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore
  ) { }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
      this.afs.collection('/users').add({
        firstName: value.firstName,
        surname: value.surname,
        email: value.email1,
      })
      .then(
        (res) => {
          resolve(res)
        },
        err => reject(err)
      )
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    
    return this.afAuth.user
  }
}