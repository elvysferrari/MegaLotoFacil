import { JogoModel } from './../../models/jogo-model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApostaService {

  constructor(private firestore: AngularFirestore) { }

  salvarAposta(jogo: JogoModel){
    const  user  =  JSON.parse(localStorage.getItem('user'));
    jogo.user = user.email;
    const jogoJson = JSON.parse(JSON.stringify(jogo));
    return this.firestore.collection('apostas').add(jogoJson);
  }

  getApostas(){
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return this.firestore.collection('apostas', ref => ref.where('user', '==', user.email)).snapshotChanges();
  }

  getIntervaloAposta(){
    return this.firestore.collection('configuracoes', ref => ref.where('configNro', '==', 1)).valueChanges();
  }

}
