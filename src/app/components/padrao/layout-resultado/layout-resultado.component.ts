import { ApostaService } from './../../../services/aposta/aposta.service';
import { JogoModel } from './../../../models/jogo-model';
import { Component, OnInit, NgModule, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-layout-resultado',
  templateUrl: './layout-resultado.component.html',
  styleUrls: ['./layout-resultado.component.scss']
})
export class LayoutResultadoComponent implements OnInit {
  @Input('jogo') jogo: JogoModel;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private apostaService: ApostaService) { }

  ngOnInit(): void {
  }

  salvarJogo(){
    this.apostaService.salvarAposta(this.jogo);
    this.voltar();
  }

  voltar(){
    this.close.emit(true);
  }

}
@NgModule({
  imports: [
    CommonModule,     
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    LayoutResultadoComponent
  ],
  declarations: [
    LayoutResultadoComponent
  ],
  providers: [
    
  ],
})
export class LayoutResultadoModule { }
