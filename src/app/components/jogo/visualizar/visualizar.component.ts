import { JogoModel } from './../../../models/jogo-model';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './../../../guards/auth.guard';
import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { TipoConcurso } from '../../padrao/layout-numeros/layout-numeros.component';
import { ApostaService } from 'src/app/services/aposta/aposta.service';
import { ConfereModule } from '../../resultado/confere/confere.component';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  @Input('jogo') jogo: JogoModel;
  @Output() close: EventEmitter<any> = new EventEmitter();
  nroSelecionado: number;
  showResultadoConcurso: boolean;
  nroConcursos: TipoConcurso[];
  padraoResult: JogoModel;
  loading: boolean;

  constructor(private apostaService: ApostaService) { }

  ngOnInit(): void {
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

    });  
  }


  concursoSelecionado(nro: number){
    this.showResultadoConcurso = false; 
    this.loading = true;
    setTimeout(() => {
      this.nroSelecionado = nro;  
      
      if(this.jogo.conferido == false){
        this.jogo.conferido = true;       
        this.jogo.nrConferido = nro; 
        this.apostaService.atualizarAposta(this.jogo.id, {...this.jogo});
      }
      this.showResultadoConcurso = true;  
      this.loading = false;
    }, 2000);

    
  }

  voltar(){
    this.loading = false;
    this.close.emit(true);
  }

}

@NgModule({
  imports: [
    CommonModule,     
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ConfereModule
  ],
  exports: [
    VisualizarComponent
  ],
  declarations: [
    VisualizarComponent
  ],
  providers: [
    
  ],
})
export class VisualizarModule { }