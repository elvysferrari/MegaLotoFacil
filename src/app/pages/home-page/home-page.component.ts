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
  
  constructor(private homePageService: HomePageService){

  }

  ngOnInit(): void {
    this.homePageService.getNotices().subscribe(async (data) => {
      this.notices = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as NoticeModel
        };
      }) 
    })
  }

  newNotice(){
    var notice = new NoticeModel();
    notice.body = "Resultado Lotofácil 2021 – 01, 02, 03, 04, 06, 07, 08, 10, 12, 15, 18, 19, 22, 23, 24. A Lotofácil também paga premiações em dinheiro para quem acerta 11, 12, 13 e 14.";
    notice.title = "Sorteio da Lotofácil 2021: veja o resultado do concurso desta quarta (26)";
    notice.image = "";
    notice.date = new Date;
    this.homePageService.saveNotice(notice);
  }

}
const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] }
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