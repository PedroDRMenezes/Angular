import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DadosComponent } from './dados/dados.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefasIdComponent } from './tarefas-id/tarefas-id.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Dados', component: DadosComponent },
  { path: 'Tarefas', component: TarefasComponent },
  { path: 'TarefasId', component: TarefasIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
