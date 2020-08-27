import { AuthGuard } from './../../guards/auth.guard';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnaliseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [
  { path: '', component: AnaliseComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaliseRoutingModule { }

@NgModule({
  imports: [
    AnaliseRoutingModule,
    CommonModule,     
    FormsModule
  ],
  exports: [
    AnaliseComponent
  ],
  declarations: [
    AnaliseComponent
  ],
  providers: [
    
  ],
})
export class AnaliseModule { }
