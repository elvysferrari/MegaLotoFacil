import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

  }

  async login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(user => {        
        this.router.navigate(['/']);
        resolve(user);
      })
      .catch(error => {
        reject(error)
      });    
    });
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification()
    this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(() => {                
        resolve();
      })
      .catch(error => {
        reject(error)
      });    

    });    
  }
  
  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  async  loginWithGoogle(){
    await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['/']);
  } 
}
