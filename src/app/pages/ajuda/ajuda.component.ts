import { AuthGuard } from './../../guards/auth.guard';
import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
const routes: Routes = [
  { path: '', component: AjudaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaRoutingModule { }

@NgModule({
  imports: [
    AjudaRoutingModule,
    CommonModule,     
    FormsModule
  ],
  exports: [
    AjudaComponent
  ],
  declarations: [
    AjudaComponent
  ],
  providers: [
    
  ],
})
export class AjudaModule { }