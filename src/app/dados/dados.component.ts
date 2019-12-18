import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.pegarTudo();
  }

  pegarTudo() {
    this.userService.getAll().subscribe((bla: User[]) => {
      this.users = bla;

    });
  }
}

