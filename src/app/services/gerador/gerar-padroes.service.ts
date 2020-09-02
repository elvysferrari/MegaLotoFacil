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
