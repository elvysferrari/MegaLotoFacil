import { NumeroModel } from 'src/app/models/numero-model';
import { SorteiosService } from './../../services/sorteio/sorteios.service';
import { UltimoSorteioModel, JogoModel } from './../../models/jogo-model';
import { ApostaService } from 'src/app/services/aposta/aposta.service';
import { LayoutNumerosModule } from './../../components/padrao/layout-numeros/layout-numeros.component';
import { AuthGuard } from './../../guards/auth.guard';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { LayoutResultadoModule } from 'src/app/components/padrao/layout-resultado/layout-resultado.component';
@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MetodosComponent implements OnInit {
  padraoSelecionado = 0;
  jogo: JogoModel;
  constructor(private router: Router,  private sorteioSerice: SorteiosService) { }

  ngOnInit(): void {
  }

  padrao8(){
    this.padraoSelecionado = 8;
  }

  padrao7(){
    this.padraoSelecionado = 7;
  }

  voltar(){
    this.padraoSelecionado = 0;
    this.router.navigate(['/']);
  }
  async padrao6(){

    await this.sorteioSerice.getLastResults().then((data: any[]) => {
      //console.log('results', data);
      this.jogo = new JogoModel();
      this.jogo.dataJogo = new Date;
      this.jogo.numeros = [];

      let numeroModel: NumeroModel;
      data.forEach((nr) => {
        numeroModel = new NumeroModel();
        numeroModel.nros = nr.nros;
        this.jogo.numeros.push({...numeroModel});
      });

      console.log('jogo', this.jogo)
      this.padraoSelecionado = 6;
    });
    

    //this.padraoSelecionado = 6;

    /*
    let ultimoSorteioModel: UltimoSorteioModel;
    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2018; 
    ultimoSorteioModel.numeros = [1, 2, 3, 4, 5, 8, 11, 12, 13, 14, 17, 18, 20, 21, 22]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2019; 
    ultimoSorteioModel.numeros = [1, 3, 5, 6, 8, 9, 10, 11, 14, 17, 18, 20, 23, 24, 25]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2020; 
    ultimoSorteioModel.numeros = [2, 3, 4, 5, 7, 8, 9, 12, 15, 16, 17, 19, 20, 21, 25]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2021; 
    ultimoSorteioModel.numeros = [1, 2, 3, 4, 6, 7, 8, 10, 12, 15, 18, 19, 22, 23, 24]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2022; 
    ultimoSorteioModel.numeros = [1, 3, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 21, 22, 25]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2023; 
    ultimoSorteioModel.numeros = [1, 2, 4, 8, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 25]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2024; 
    ultimoSorteioModel.numeros = [1, 2, 3, 4, 5, 6, 8, 9, 11, 14, 17, 18, 21, 23, 24]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2025; 
    ultimoSorteioModel.numeros = [2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 19, 20, 22]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2026; 
    ultimoSorteioModel.numeros = [1, 3, 4, 5, 6, 11, 13, 14, 16, 19, 20, 21, 22, 23, 24]
    this.apostaService.inserirResultado({...ultimoSorteioModel});

    ultimoSorteioModel = new UltimoSorteioModel();
    ultimoSorteioModel.dataSorteio = new Date();
    ultimoSorteioModel.nroConcurso = 2027; 
    ultimoSorteioModel.numeros = [1, 2, 3, 6, 7, 9, 12, 13, 16, 17, 20, 21, 23, 24, 25]
    this.apostaService.inserirResultado({...ultimoSorteioModel});
    */
  }

}
const routes: Routes = [
  { path: '', component: MetodosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodosRoutingModule { }

@NgModule({
  imports: [
    MetodosRoutingModule,
    CommonModule,     
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    LayoutNumerosModule,
    LayoutResultadoModule
  ],
  exports: [
    MetodosComponent
  ],
  declarations: [
    MetodosComponent
  ],
  providers: [
    
  ],
})
export class MetodosModule { }