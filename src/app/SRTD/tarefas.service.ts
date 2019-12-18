import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  pegaTudo(){
    return this.http.get("http://jsonplaceholder.typicode.com/todos")
  }

  pegaId(id:number){
    return this.http.get(`http://jsonplaceholder.typicode.com/todos/${id}`)
  }

}
