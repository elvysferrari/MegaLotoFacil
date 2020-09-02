import { JogoModel } from './../../models/jogo-model';
import { VisualizarModule } from './../../components/jogo/visualizar/visualizar.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ApostaService } from 'src/app/services/aposta/aposta.service';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {
  jogos: JogoModel[];
  showVerJogo: boolean;
  jogoAtivo: JogoModel;

  constructor(private apostaService: ApostaService) { }

  ngOnInit(): void {
    this.apostaService.getApostas().subscribe(async (data) => {
      this.jogos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as JogoModel
        };
      }) 
      this.jogos.sort((a: any, b: any) => {
        return a.dataJogo > b.dataJogo ? -1 : 1;
      });  
    });
  }

  abrirJogo(jogo: JogoModel){
    this.showVerJogo = true;
    this.jogoAtivo = jogo;
  }

  fechar(event){    
    console.log('fechar', event)
    this.showVerJogo = false;
    this.jogoAtivo = undefined;
  }

}
const routes: Routes = [
  { path: '', component: FavoritoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritoRoutingModule { }
@NgModule({
  imports: [
    FavoritoRoutingModule,
    CommonModule,     
    FormsModule,
    MatListModule,
    VisualizarModule
  ],
  exports: [
    FavoritoComponent
  ],
  declarations: [
    FavoritoComponent
  ],
  providers: [
    
  ],
})
export class FavoritoPageModule { }