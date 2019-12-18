import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../SRTD/tarefas.service';
import { ToDo } from '../model/todo';

@Component({
  selector: 'app-tarefas2',
  templateUrl: './tarefas2.component.html',
  styleUrls: ['./tarefas2.component.css']
})
export class Tarefas2Component implements OnInit {

  constructor(private TarefasService: TarefasService) { }

  tarefas2: ToDo[];

  ngOnInit() {
    this.todasTarefas();
  }

  todasTarefas() {
    this.TarefasService.pegaTudo().subscribe((td: ToDo[]) => {
      this.tarefas2 = td;
    })
  }
}
