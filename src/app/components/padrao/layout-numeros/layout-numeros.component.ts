import { ConfereModule } from './../../resultado/confere/confere.component';
import { JogoModel } from './../../../models/jogo-model';
import { LayoutResultadoModule } from './../layout-resultado/layout-resultado.component';
import { Ball } from './../../../models/ball-model';
import { Component, OnInit, NgModule, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { GerarPadroesService } from 'src/app/services/gerador/gerar-padroes.service';
import {MatSelectModule} from '@angular/material/select';
import { ApostaService } from 'src/app/services/aposta/aposta.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-numeros',
  templateUrl: './layout-numeros.component.html',
  styleUrls: ['./layout-numeros.component.scss']
})
export class LayoutNumerosComponent implements OnInit {
  @Input('nroPadrao') padraoSelecionado: number;

  titulo: string;
  balls: Ball[] = [];
  showProsseguir: boolean;
  showResult: boolean;
  showConfere: boolean;
  showResultadoConcurso: boolean;

  padraoResult: JogoModel;
  nroSelecionado: number;
  nroConcursos: TipoConcurso[];
  constructor(private gerarPadroesService: GerarPadroesService, 
              private apostaService: ApostaService,
              private ref: ChangeDetectorRef,
              private router: Router) {   
  }

  ngOnInit(): void {
    let nro = "";
    
    let b : Ball;
    b = new Ball();
    b.nro = 1;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 2;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 3;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 4;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 8;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 9;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 10;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 11;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 15;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 16;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 17;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 18;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 22;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 23;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 24;
    b.selected = false;
    this.balls.push({...b});

    b = new Ball();
    b.nro = 25;
    b.selected = false;
    this.balls.push({...b});    



    if(this.padraoSelecionado == 8){
      nro = "7";


    }else if(this.padraoSelecionado == 7){
      nro = "8";
    }  

    this.titulo = "Selecione abaixo " + nro + " números para incluir na sua aposta";
  }

  selected(ball: Ball){
    let qtdDiminuir = 0
    if(this.padraoSelecionado == 8) 
      qtdDiminuir = 2

    if(this.padraoSelecionado == 7) 
      qtdDiminuir = 0     

    let qtdeSelecionadas = this.balls.filter(x => x.selected == true);  
    if(qtdeSelecionadas.length <= (this.padraoSelecionado - qtdDiminuir)){
      this.balls.find(x => x.nro == ball.nro).selected = !ball.selected;

      if(qtdeSelecionadas.length == (this.padraoSelecionado - qtdDiminuir)){
        this.showProsseguir = true;
      }else{
        this.showProsseguir = false;
      }
    }else{
      if(ball.selected == false)
        alert("Máximo de números marcados.");
      else{
        this.balls.find(x => x.nro == ball.nro).selected = !ball.selected;
        if(qtdeSelecionadas.length == (this.padraoSelecionado - qtdDiminuir)){
          this.showProsseguir = true;
        }else{
          this.showProsseguir = false;
        }
      }
    }
  }

  prosseguir(){
    let nrosAposta = [];
    this.balls.forEach((ball) => {
      if(ball.selected){
        nrosAposta.push(ball.nro);
      }
    });
    if(this.padraoSelecionado == 8){
      this.padraoResult = this.gerarPadroesService.gerarPadrao8(nrosAposta);
      console.log(this.padraoResult);  
      this.showResult = true;
    }

    if(this.padraoSelecionado == 7){
      this.padraoResult = this.gerarPadroesService.gerarPadrao7(nrosAposta);
      console.log(this.padraoResult);  
      this.showResult = true;
    }    
  }

  conferir(){   
    this.showResultadoConcurso = false;    
    let apostaInicial = 0;
    let apostaFinal = 0;

    this.apostaService.getIntervaloAposta().subscribe(async (data: any[]) => {          
      apostaInicial = data[0].apostaInicial;
      apostaFinal = data[0].apostaFinal;
     
      let rangeNros = [];
      for (let i = apostaInicial; i <= apostaFinal; i++) {
        rangeNros.push({value: i, viewValue: i.toString()})
      }

      this.nroConcursos = rangeNros.sort((a: any, b: any) => {
        return a.value > b.value ? -1 : 1;
      });
      this.ref.detectChanges();
      this.showConfere = true;
    });  
  }

  concursoSelecionado(nro: number){
    console.log(nro);
    this.showConfere = false;
    this.nroSelecionado = nro;
    this.showResultadoConcurso = true;  
  }

  voltar(){
    this.router.navigate(['/']);
  }
}
export class TipoConcurso{
  value: number;
  viewValue: string;
}
@NgModule({
  imports: [
    CommonModule,     
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    LayoutResultadoModule,
    ConfereModule
  ],
  exports: [
    LayoutNumerosComponent
  ],
  declarations: [
    LayoutNumerosComponent
  ],
  providers: [
    
  ],
})
export class LayoutNumerosModule { }

