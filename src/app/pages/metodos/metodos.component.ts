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

  constructor() { }

  ngOnInit(): void {
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
    MatButtonModule
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