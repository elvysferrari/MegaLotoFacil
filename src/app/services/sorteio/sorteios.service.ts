import { ApostaService } from '../aposta/aposta.service';

import { Injectable } from '@angular/core';
import { UltimoSorteioModel } from '../../models/jogo-model';

@Injectable({
  providedIn: 'root'
})
export class SorteiosService {
  public showResult: boolean = false; 
  
  constructor(private apostaService: ApostaService) { }

  public async getLastResults(){
    return new Promise((resolve, reject) => {
      let r1: number = 0
      let r2: number = 0
      let r3: number = 0
      let r4: number = 0
      let r5: number = 0
  
      let r6: number = 0
      let r7: number = 0
      let r8: number = 0
      let r9: number = 0
      let r10: number = 0
  
      let r11: number = 0
      let r12: number = 0
      let r13: number = 0
      let r14: number = 0
      let r15: number = 0
  
      let r16: number = 0
      let r17: number = 0
      let r18: number = 0
      let r19: number = 0
      let r20: number = 0
  
      let r21: number = 0
      let r22: number = 0
      let r23: number = 0
      let r24: number = 0
      let r25: number = 0
  
      
      this.apostaService.getUltimosSorteios().subscribe(async (data: UltimoSorteioModel[]) => {          
        let st1 = [] 
        let st2 = []
        let st3 = []  
        let st4 = []  
        let st5 = []
        let st6 = []
        let st7 = []
        let st8 = []
        let st9 = []    
        let st10 = []
        
        data.sort((a: any, b: any) => {
          return a.dataSorteio > b.dataSorteio ? -1 : 1;
        });
  
        for(let i = 0; i <= 10; i++){
          if (i == 0){
            st1 = data[i].numeros;
          }
  
          if (i == 1){
            st2 = data[i].numeros;
          }
  
          if (i == 2){
            st3 = data[i].numeros;
          }
  
          if (i == 3){
            st4 = data[i].numeros;
          }
  
          if (i == 4){
            st5 = data[i].numeros;
          }
  
          if (i == 5){
            st6 = data[i].numeros;
          }
  
          if (i == 6){
            st7 = data[i].numeros;
          }
  
          if (i == 7){
            st8 = data[i].numeros;
          }
  
          if (i == 8){
            st9 = data[i].numeros;
          }
  
          if (i == 9){
            st10 = data[i].numeros;
          }
          
        }
  
  
        let valores = [];
        let results: number[] = [];
    
        results = results.concat(...st1);
        results = results.concat(...st2);
        results = results.concat(...st3);
        results = results.concat(...st4);
        results = results.concat(...st5);
        results = results.concat(...st6);
        results = results.concat(...st7);
        results = results.concat(...st8);
        results = results.concat(...st9);
        results = results.concat(...st10);
    
        r1 = results.filter(x => x == 1).length;
        valores.push({nro: 1, valor: r1});
    
        r2 = results.filter(x => x == 2).length;
        valores.push({nro: 2, valor: r2});
    
        r3 = results.filter(x => x == 3).length;
        valores.push({nro: 3, valor: r3});
    
        r4 = results.filter(x => x == 4).length;
        valores.push({nro: 4, valor: r4});
    
        r5 = results.filter(x => x == 5).length;
        valores.push({nro: 5, valor: r5});
    
        r6 = results.filter(x => x == 6).length;
        valores.push({nro: 6, valor: r6});
    
        r7 = results.filter(x => x == 7).length;
        valores.push({nro: 7, valor: r7});
    
        r8 = results.filter(x => x == 8).length;
        valores.push({nro: 8, valor: r8});
    
        r9 = results.filter(x => x == 9).length;
        valores.push({nro: 9, valor: r9});
    
        r10 = results.filter(x => x == 10).length;
        valores.push({nro: 10, valor: r10});
    
        r11 = results.filter(x => x == 11).length;
        valores.push({nro: 11, valor: r11});
    
        r12 = results.filter(x => x == 12).length;
        valores.push({nro: 12, valor: r12});
    
        r13 = results.filter(x => x == 13).length;
        valores.push({nro: 13, valor: r13});
    
        r14 = results.filter(x => x == 14).length;
        valores.push({nro: 14, valor: r14});
    
        r15 = results.filter(x => x == 15).length;
        valores.push({nro: 15, valor: r15});
    
        r16 = results.filter(x => x == 16).length;
        valores.push({nro: 16, valor: r16});
    
        r17 = results.filter(x => x == 17).length;
        valores.push({nro: 17, valor: r17});
    
        r18 = results.filter(x => x == 18).length;
        valores.push({nro: 18, valor: r18});
    
        r19 = results.filter(x => x == 19).length;
        valores.push({nro: 19, valor: r19});
    
        r20 = results.filter(x => x == 20).length;
        valores.push({nro: 20, valor: r20});
    
        r21 = results.filter(x => x == 21).length;
        valores.push({nro: 21, valor: r21});
    
        r22 = results.filter(x => x == 22).length;
        valores.push({nro: 22, valor: r22});
    
        r23 = results.filter(x => x == 23).length;
        valores.push({nro: 23, valor: r23});
    
        r24 = results.filter(x => x == 24).length;
        valores.push({nro: 24, valor: r24});
    
        r25 = results.filter(x => x == 25).length;
        valores.push({nro: 25, valor: r25});
    
        valores.sort((a: any, b: any) => {
          return a.valor > b.valor ? -1 : 1;
        });
    
        let noveNumeros = [];
        //pegar os 9 numeros que mais sairam 
        for (let index = 0; index < 9; index++) {
          let element = valores[index];
          noveNumeros.push(element);
        }
    
        noveNumeros.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        //pegar os 10 nros que nao sairam no ultimo sorteio
        let dezNumeros = [];
        for (let index = 1; index <= 25; index++) {
          let element = st10.find(x => x == index);
          if(element == undefined){
            dezNumeros.push(index);
          }
        }
    
    
        valores.sort((a: any, b: any) => {
          return a.valor > b.valor ? -1 : 1;
        });
        //console.log('dez', dezNumeros);
        //console.log('valores', valores);
    
        let cincoNumeros = [];
        for (let index = 0; cincoNumeros.length < 5; index++) {
          let element = valores[index];
          if(element != undefined){
            //console.log('element', element);
            let element2 = dezNumeros.find(x => x == element.nro);
            //console.log('element2', element2)
            if(element2 != undefined){
              let exist = noveNumeros.find(x => x.nro == element.nro);
              if(exist == undefined){
                cincoNumeros.push(element);
              }
              
            }
          }
          
        }
        
        cincoNumeros.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let resultadoFinal = [];
    
        resultadoFinal = resultadoFinal.concat(...noveNumeros);
        resultadoFinal = resultadoFinal.concat(...cincoNumeros);
    
    
    
        let nrosParaJogarFinal: number[] = [];
    
        resultadoFinal.forEach(el => {
          for (let index = 1; index < 26; index++) {
            let exist = resultadoFinal.find(x => x.nro == index);
            if(exist == undefined){
              let exist2 = nrosParaJogarFinal.find(x => x == index);
              if(exist2 == undefined){
                nrosParaJogarFinal.push(index);
              }
            }
          }
        })
    
        let jogada1 = [...resultadoFinal];
        jogada1 = jogada1.concat([{nro: nrosParaJogarFinal[0], valor: 10}])
        jogada1.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada2 = [...resultadoFinal];
        jogada2 = jogada2.concat([{nro: nrosParaJogarFinal[1], valor: 10}])
        jogada2.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada3 = [...resultadoFinal];
        jogada3 = jogada3.concat([{nro: nrosParaJogarFinal[2], valor: 10}])
        jogada3.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada4 = [...resultadoFinal];
        jogada4 = jogada4.concat([{nro: nrosParaJogarFinal[3], valor: 10}])
        jogada4.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada5 = [...resultadoFinal];
        jogada5 = jogada5.concat([{nro: nrosParaJogarFinal[4], valor: 10}])
        jogada5.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada6 = [...resultadoFinal];
        jogada6 = jogada6.concat([{nro: nrosParaJogarFinal[5], valor: 10}])
        jogada6.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada7 = [...resultadoFinal];
        jogada7 = jogada7.concat([{nro: nrosParaJogarFinal[6], valor: 10}])
        jogada7.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada8 = [...resultadoFinal];
        jogada8 = jogada8.concat([{nro: nrosParaJogarFinal[7], valor: 10}])
        jogada8.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada9 = [...resultadoFinal];
        jogada9= jogada9.concat([{nro: nrosParaJogarFinal[8], valor: 10}])
        jogada9.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada10 = [...resultadoFinal];
        jogada10 = jogada10.concat([{nro: nrosParaJogarFinal[9], valor: 10}])
        jogada10.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogada11 = [...resultadoFinal];
        jogada11 = jogada11.concat([{nro: nrosParaJogarFinal[10], valor: 10}])
        jogada11.sort((a: any, b: any) => {
          return a.nro < b.nro ? -1 : 1;
        });
    
        let jogarNesse = [{
          jg: 1, nros: jogada1.map((item) => { return item.nro })
        },
        {
          jg: 2, nros: jogada2.map((item) => { return item.nro})
        },
        {
          jg: 3, nros: jogada3.map((item) => { return item.nro})
        },
        {
          jg: 4, nros: jogada4.map((item) => { return item.nro})
        },
        {
          jg: 5, nros: jogada5.map((item) => { return item.nro})
        },
        {
          jg: 6, nros: jogada6.map((item) => { return item.nro})
        },
        {
          jg: 7, nros: jogada7.map((item) => { return item.nro})
        },
        {
          jg: 8, nros: jogada8.map((item) => { return item.nro})
        },
        {
          jg: 9, nros: jogada9.map((item) => { return item.nro})
        },
        {
          jg: 10, nros: jogada10.map((item) => { return item.nro})
        },
        {
          jg: 11, nros: jogada11.map((item) => { return item.nro})
        }
      ]
        resolve(jogarNesse);
      });
    });     
  }
}
