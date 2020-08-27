import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    FormsModule
    
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