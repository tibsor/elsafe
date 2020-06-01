import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public afs: AngularFirestore
  ){ }

    addUser(value){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/users').add({
          firstname: value.firstname,
          surname: value.surname,
          email: value.email,
          DOB: value.birthday,
        })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
      })
    }
    
}
