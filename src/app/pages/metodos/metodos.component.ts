import { LayoutNumerosModule } from './../../components/padrao/layout-numeros/layout-numeros.component';
import { GerarPadroesService } from './../../services/gerador/gerar-padroes.service';
import { AuthGuard } from './../../guards/auth.guard';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MetodosComponent implements OnInit {
  private padrao8Result;
  private padrao7Result;
  private padrao6Result;
  private padrao5Result;
  private padrao4Result;
  private padrao3Result;
  private padrao2Result;
  private padrao1Result;

  padraoSelecionado = 0;

  constructor(private gerarPadroesService: GerarPadroesService) { }

  ngOnInit(): void {
  }

  padrao8(){
    this.padraoSelecionado = 8;
  }

  padrao7(){
    this.padraoSelecionado = 7;
    //this.padrao8Result = this.gerarPadroesService.gerarPadrao7([1,2,3,4,8,9,10]);
    //console.log(this.padrao8Result);
  }

  padrao6(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao6([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
  }

  padrao5(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao5([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
  }

  padrao4(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao4([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
  }

  padrao3(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao3([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
  }

  padrao2(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao2([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
  }

  padrao1(){
    this.padrao8Result = this.gerarPadroesService.gerarPadrao2([1,2,3,4,8,9,10]);
    console.log(this.padrao8Result);
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
    LayoutNumerosModule
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