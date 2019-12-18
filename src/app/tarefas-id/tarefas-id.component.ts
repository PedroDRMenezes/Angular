import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../SRTD/tarefas.service';
import { ToDo } from '../model/todo';

@Component({
  selector: 'app-tarefas-id',
  templateUrl: './tarefas-id.component.html',
  styleUrls: ['./tarefas-id.component.css']
})
export class TarefasIdComponent implements OnInit {

  id:number;
  constructor(private tf:TarefasService) { }

  private tarefas:ToDo;

  ngOnInit() {
  }

  private pesquisar(){
    this.tf.pegaId(this.id).subscribe((res:ToDo)=>{
      this.tarefas=res;
      console.log(this.tarefas)
    })
  }



}
