import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  senha: string;
  showError: boolean = false;
  constructor(private  authService:  AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.showError = false;
    this.authService.login(this.email, this.senha).then(() =>{

    }, () => {  
      this.showError = true;
    });
  }
}
const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,     
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    
  ],
})
export class LoginModule { }
