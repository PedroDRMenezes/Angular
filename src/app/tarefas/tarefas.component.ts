import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../SRTD/tarefas.service';
import { ToDo } from '../model/todo';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private TarefasService: TarefasService) { }

  tarefas: ToDo[];

  ngOnInit() {
    this.todasTarefas();
  }

  todasTarefas() {
    this.TarefasService.pegaTudo().subscribe((td: ToDo[]) => {
      this.tarefas=td;
    })
  }

}
