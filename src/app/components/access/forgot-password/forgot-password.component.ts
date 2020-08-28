import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  showError: boolean = false;
  showSend: boolean;
  constructor(private  authService:  AuthService) { }

  ngOnInit(): void {
  }

  recuperarSenha(){
    this.showError = false;
    this.showSend = false;
    this.authService.sendPasswordResetEmail(this.email).then(() =>{
      this.showSend = true;
    }, () => {  
      this.showError = true;
    });;
  }

}
const routes: Routes = [
  { path: '', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  ForgotPasswordRoutingModule { }

@NgModule({
  imports: [
    ForgotPasswordRoutingModule,
    CommonModule,     
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ForgotPasswordComponent
  ],
  declarations: [
    ForgotPasswordComponent
  ],
  providers: [
    
  ],
})
export class ForgotPasswordModule { }
