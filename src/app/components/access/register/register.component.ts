import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
const routes: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule { }

@NgModule({
  imports: [
    RegisterRoutingModule,
    CommonModule,     
    FormsModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    
  ],
})
export class RegisterModule { }

