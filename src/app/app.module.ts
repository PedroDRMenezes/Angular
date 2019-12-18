import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DadosComponent } from './dados/dados.component';
import { HttpClientModule } from '@angular/common/http';
import { TarefasComponent } from './tarefas/tarefas.component';
import { Tarefas2Component } from './tarefas2/tarefas2.component';
import { TarefasIdComponent } from './tarefas-id/tarefas-id.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    DadosComponent,
    TarefasComponent,
    Tarefas2Component,
    TarefasIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
