import { JogoModel } from './../../../models/jogo-model';
import { Ball } from './../../../models/ball-model';
import { Component, OnInit, NgModule, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultadoService } from 'src/app/services/resultado/resultado.service';
import { Concurso } from 'src/app/models/concurso-model';
import { MatTableModule } from '@angular/material/table';
import { Premio } from 'src/app/models/premio-model';

@Component({
  selector: 'app-confere',
  templateUrl: './confere.component.html',
  styleUrls: ['./confere.component.scss']
})
export class ConfereComponent implements OnInit {
  @Input('nroConcurso') nroConcurso: number;
  @Input('nrosEscolhidos') nrosEscolhidos: JogoModel;
  resultado: Concurso;
  arrayNr: number[] = [];
  displayedColumns: string[] = ['nome', 'quantidade_ganhadores', 'valor_total'];
  
  result11: Premio = new Premio();
  result12: Premio = new Premio();
  result13: Premio = new Premio();
  result14: Premio = new Premio();
  result15: Premio = new Premio();
  
  totalResult11: number = 0;
  totalResult12: number = 0;
  totalResult13: number = 0;
  totalResult14: number = 0;
  totalResult15: number = 0;

  constructor(private resultadoService: ResultadoService) { }

  ngOnInit(): void {    
  
    this.resultadoService.getResultado(this.nroConcurso).subscribe((data: any)=>{   
      this.resultado = data; 
     
      this.resultado.dezenas.forEach((nr) => {
        this.arrayNr.push(parseInt(nr));
      }); 

      let qtdPontos = 0;

      this.nrosEscolhidos.numeros.forEach(x => {
        this.resultado.dezenas.forEach((nr) => {
          let bAchou = x.nros.find(y => y == parseInt(nr));
          if(bAchou != undefined){
            qtdPontos++
          }
        })
        if(qtdPontos >= 11){
          x.acerto = qtdPontos;
        }
        qtdPontos = 0;        
      });

           
      let qtdAcertos = this.nrosEscolhidos.numeros.filter(x => x.acerto >= 11);

      qtdAcertos.forEach(x => {       
        if(x.acerto == 11)
          this.totalResult11 ++;

        if(x.acerto == 12)
            this.totalResult12 ++;

        if(x.acerto == 13)
          this.totalResult13 ++;

        if(x.acerto == 14)
          this.totalResult14 ++;    

        if(x.acerto == 15)
          this.totalResult15 ++;            
      });
      
      this.result11.nome = "Acertou 11";
      this.result11.quantidade_ganhadores = 0;
      this.result11.valor_total = 0;
      if(this.totalResult11 > 0){
        let acertou11 = this.resultado.premiacao.find(x => x.acertos == 11);
        this.result11.quantidade_ganhadores = this.totalResult11;
        this.result11.valor_total = acertou11.valor_total * this.totalResult11;
        
      }

      this.result12.nome = "Acertou 12";
      this.result12.quantidade_ganhadores = 0;
      this.result12.valor_total = 0;
      if(this.totalResult12 > 0){
        let acertou12 = this.resultado.premiacao.find(x => x.acertos == 12);
        this.result12.quantidade_ganhadores = this.totalResult12;
        this.result12.valor_total = acertou12.valor_total * this.totalResult12;
        
      }

      this.result13.nome = "Acertou 13";
      this.result13.quantidade_ganhadores = 0;
      this.result13.valor_total = 0;
      if(this.totalResult13 > 0){
        let acertou13 = this.resultado.premiacao.find(x => x.acertos == 13);
        this.result13.quantidade_ganhadores = this.totalResult13;
        this.result13.valor_total = acertou13.valor_total * this.totalResult13;
       
      }

      this.result14.nome = "Acertou 14";
      this.result14.quantidade_ganhadores = 0;
      this.result14.valor_total = 0;
      if(this.totalResult14 > 0){
        let acertou14 = this.resultado.premiacao.find(x => x.acertos == 14);
        this.result14.quantidade_ganhadores = this.totalResult14;
        this.result14.valor_total = acertou14.valor_total * this.totalResult14;
       
      }

      this.result15.nome = "Acertou 15";
      this.result15.quantidade_ganhadores = 0;
      this.result15.valor_total = 0;

      if(this.totalResult15 > 0){
        let acertou15 = this.resultado.premiacao.find(x => x.acertos == 15);
        this.result15.quantidade_ganhadores = this.totalResult15;
        this.result15.valor_total = acertou15.valor_total * this.totalResult15;
        
      }

    }) 
  }
}



@NgModule({
  imports: [
    CommonModule,     
    FormsModule,
    MatTableModule
  ],
  exports: [
    ConfereComponent
  ],
  declarations: [
    ConfereComponent
  ],
  providers: [
    
  ],
})
export class ConfereModule { }