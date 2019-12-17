import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Dados', component: DadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
