import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/home-page/home-page.component').then(m => m.HomePageModule)
  },
  { 
    path: 'favoritos', 
    loadChildren: () => import('./pages/favorito/favorito.component').then(m => m.FavoritoPageModule)
  },
  { 
    path: 'metodos', 
    loadChildren: () => import('./pages/metodos/metodos.component').then(m => m.MetodosModule)
  },
  { 
    path: 'analise', 
    loadChildren: () => import('./pages/analise/analise.component').then(m => m.AnaliseModule)
  },
  { 
    path: 'ajuda', 
    loadChildren: () => import('./pages/ajuda/ajuda.component').then(m => m.AjudaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
