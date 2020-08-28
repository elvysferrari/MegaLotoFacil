import { MatTabsModule } from '@angular/material/tabs';
import { GerarPadroesService } from './services/gerador/gerar-padroes.service';
import { AuthService } from './services/auth/auth.service';
import { FavoritoPageModule } from './pages/favorito/favorito.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomePageModule } from './pages/home-page/home-page.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { ApostaService } from './services/aposta/aposta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HomePageModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    GerarPadroesService,
    ApostaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
