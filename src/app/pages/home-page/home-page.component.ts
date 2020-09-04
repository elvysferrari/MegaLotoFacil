import { AuthService } from 'src/app/services/auth/auth.service';
import { HomePageService } from './../../services/home-page.service';
import { NoticeModel } from './../../models/notice-model';
import { Component, OnInit, NgModule, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  notices: NoticeModel[];
  isLogged: boolean;
  constructor(private homePageService: HomePageService, private authService: AuthService){

  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn;
    if(this.isLogged){
      this.homePageService.getNotices().subscribe(async (data) => {
        this.notices = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as NoticeModel
          };
        }) 

        this.notices.sort((a: any, b: any) => {
          return a.date > b.date ? -1 : 1;
        });
      })
    }
  }

  newNotice(){
    var notice = new NoticeModel();
    notice.body = "Resultado Lotofácil 2026 – 01-03-04-05-06-11-13-14-16-19-20-21-22-23-24";
    notice.title = "Lotofácil 2026 acumula e vai a R$ 3,4 milhões no próximo sorteio; veja números...";
    notice.image = "";
    notice.date = new Date;
    this.homePageService.saveNotice(notice);

    var notice = new NoticeModel();
    notice.body = "Resultado Lotofácil 2027 – 01-02-03-06-07-09-12-13-16-17-20-21-23-24-25";
    notice.title = "Lotofácil 2027 paga R$ 1,6 milhão a duas apostas; veja os números sorteados...";
    notice.image = "";
    notice.date = new Date;
    this.homePageService.saveNotice(notice);
  }

}
const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }

@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule,     
    FormsModule,
    MatCardModule
  ],
  exports: [
    HomePageComponent
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [
    
  ],
})
export class HomePageModule { }