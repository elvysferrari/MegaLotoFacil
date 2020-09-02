import { NumeroModel } from './../../models/numero-model';
import { JogoModel } from './../../models/jogo-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerarPadroesService {

  nrosPadrao: number[] = [5, 6, 7, 12, 13, 14, 19, 20, 21]

  constructor() { }

  gerarPadrao8(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 20, 21];    
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  
    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao7(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 20];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 13, 19, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 12, 13, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 7, 12, 14, 19, 20];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 6, 7, 12, 14, 19, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo9 = new NumeroModel();
    jogo9.nros = [5, 6, 7, 12, 14, 20, 21];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  


    let jogo10 = new NumeroModel();
    jogo10.nros = [5, 6, 7, 12, 19, 20, 21];
    jogo10.nros = jogo10.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo11 = new NumeroModel();
    jogo11.nros = [5, 6, 7, 13, 14, 19, 20];
    jogo11.nros = jogo11.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo12 = new NumeroModel();
    jogo12.nros = [5, 6, 7, 13, 14, 19, 21];
    jogo12.nros = jogo12.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo13 = new NumeroModel();
    jogo13.nros = [5, 6, 7, 13, 14, 20, 21];
    jogo13.nros = jogo13.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo14 = new NumeroModel();
    jogo14.nros = [5, 6, 7, 13, 19, 20, 21];
    jogo14.nros = jogo14.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo15 = new NumeroModel();
    jogo15.nros = [5, 6, 7, 14, 19, 20, 21];
    jogo15.nros = jogo15.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo16 = new NumeroModel();
    jogo16.nros = [5, 6, 12, 13, 14, 19, 20];
    jogo16.nros = jogo16.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo17 = new NumeroModel();
    jogo17.nros = [5, 6, 12, 13, 14, 19, 21];
    jogo17.nros = jogo17.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo18 = new NumeroModel();
    jogo18.nros = [5, 6, 12, 13, 14, 20, 21];
    jogo18.nros = jogo18.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo19 = new NumeroModel();
    jogo19.nros = [5, 6, 12, 13, 19, 20, 21];
    jogo19.nros = jogo19.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo20 = new NumeroModel();
    jogo20.nros = [5, 6, 12, 14, 19, 20, 21];
    jogo20.nros = jogo20.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo21 = new NumeroModel();
    jogo21.nros = [5, 6, 13, 14, 19, 20, 21];
    jogo21.nros = jogo21.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo22 = new NumeroModel();
    jogo22.nros = [5, 7, 12, 13, 14, 19, 20];
    jogo22.nros = jogo22.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo23 = new NumeroModel();
    jogo23.nros = [5, 7, 12, 13, 14, 19, 21];
    jogo23.nros = jogo23.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo24 = new NumeroModel();
    jogo24.nros = [5, 7, 12, 13, 14, 20, 21];
    jogo24.nros = jogo24.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo25 = new NumeroModel();
    jogo25.nros = [5, 7, 12, 13, 19, 20, 21];
    jogo25.nros = jogo25.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo26 = new NumeroModel();
    jogo26.nros = [5, 7, 12, 14, 19, 20, 21];
    jogo26.nros = jogo26.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo27 = new NumeroModel();
    jogo27.nros = [5, 7, 13, 14, 19, 20, 21];
    jogo27.nros = jogo27.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo28 = new NumeroModel();
    jogo28.nros = [5, 12, 13, 14, 19, 20, 21];
    jogo28.nros = jogo28.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo29 = new NumeroModel();
    jogo29.nros = [6, 7, 12, 13, 14, 19, 20];
    jogo29.nros = jogo29.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  
    
    let jogo30 = new NumeroModel();
    jogo30.nros = [6, 7, 12, 13, 14, 19, 21];
    jogo30.nros = jogo30.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo31 = new NumeroModel();
    jogo31.nros = [6, 7, 12, 13, 14, 20, 21];
    jogo31.nros = jogo31.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo32= new NumeroModel();
    jogo32.nros = [6, 7, 12, 13, 19, 20, 21];
    jogo32.nros = jogo32.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo33 = new NumeroModel();
    jogo33.nros = [6, 7, 12, 14, 19, 20, 21];
    jogo33.nros = jogo33.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo34 = new NumeroModel();
    jogo34.nros = [6, 7, 13, 14, 19, 20, 21];
    jogo34.nros = jogo34.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo35 = new NumeroModel();
    jogo35.nros = [6, 12, 13, 14, 19, 20, 21];
    jogo35.nros = jogo35.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    let jogo36 = new NumeroModel();
    jogo36.nros = [7, 12, 13, 14, 19, 20, 21];
    jogo36.nros = jogo36.nros.concat(...nrosEscolhidos).sort((a: any, b: any) => {
      return a < b ? -1 : 1;
    });  

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);
    jogo.numeros.push(jogo10);

    jogo.numeros.push(jogo11);
    jogo.numeros.push(jogo12);
    jogo.numeros.push(jogo13);
    jogo.numeros.push(jogo14);
    jogo.numeros.push(jogo15);
    jogo.numeros.push(jogo16);
    jogo.numeros.push(jogo17);
    jogo.numeros.push(jogo18);
    jogo.numeros.push(jogo19);
    jogo.numeros.push(jogo20);

    jogo.numeros.push(jogo21);
    jogo.numeros.push(jogo22);
    jogo.numeros.push(jogo23);
    jogo.numeros.push(jogo24);
    jogo.numeros.push(jogo25);
    jogo.numeros.push(jogo26);
    jogo.numeros.push(jogo27);
    jogo.numeros.push(jogo28);
    jogo.numeros.push(jogo29);
    jogo.numeros.push(jogo30);

    jogo.numeros.push(jogo31);
    jogo.numeros.push(jogo32);
    jogo.numeros.push(jogo33);
    jogo.numeros.push(jogo34);
    jogo.numeros.push(jogo35);
    jogo.numeros.push(jogo36);          

    return jogo; 
  }

  gerarPadrao6(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao5(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao4(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao3(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao2(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }

  gerarPadrao1(nrosEscolhidos: number[]){
    
    let jogo = new JogoModel();
    jogo.dataJogo = new Date;
    jogo.conferido = false;
    jogo.totalValorAcertado = 0;
    jogo.numeros = [];

    let jogo1 = new NumeroModel();
    jogo1.nros = [5, 6, 7, 12, 13, 14, 19, 20];
    jogo1.nros = jogo1.nros.concat(...nrosEscolhidos);

    let jogo2 = new NumeroModel();
    jogo2.nros = [5, 6, 7, 12, 13, 14, 19, 21];
    jogo2.nros = jogo2.nros.concat(...nrosEscolhidos);

    let jogo3 = new NumeroModel();
    jogo3.nros = [5, 6, 7, 12, 13, 14, 20, 21];
    jogo3.nros = jogo3.nros.concat(...nrosEscolhidos);

    let jogo4 = new NumeroModel();
    jogo4.nros = [5, 6, 7, 12, 13, 19, 20, 21];
    jogo4.nros = jogo4.nros.concat(...nrosEscolhidos);

    let jogo5 = new NumeroModel();
    jogo5.nros = [5, 6, 7, 12, 14, 19, 20, 21];
    jogo5.nros = jogo5.nros.concat(...nrosEscolhidos);

    let jogo6 = new NumeroModel();
    jogo6.nros = [5, 6, 7, 13, 14, 19, 20, 21];
    jogo6.nros = jogo6.nros.concat(...nrosEscolhidos);

    let jogo7 = new NumeroModel();
    jogo7.nros = [5, 6, 12, 13, 14, 19, 20, 21];
    jogo7.nros = jogo7.nros.concat(...nrosEscolhidos);

    let jogo8 = new NumeroModel();
    jogo8.nros = [5, 7, 12, 13, 14, 19, 20, 21];
    jogo8.nros = jogo8.nros.concat(...nrosEscolhidos);

    let jogo9 = new NumeroModel();
    jogo9.nros = [6, 7, 12, 13, 14, 19, 20, 21 ];
    jogo9.nros = jogo9.nros.concat(...nrosEscolhidos);

    jogo.numeros.push(jogo1);
    jogo.numeros.push(jogo2);
    jogo.numeros.push(jogo3);
    jogo.numeros.push(jogo4);
    jogo.numeros.push(jogo5);
    jogo.numeros.push(jogo6);
    jogo.numeros.push(jogo7);
    jogo.numeros.push(jogo8);
    jogo.numeros.push(jogo9);

    return jogo; 
  }
}
