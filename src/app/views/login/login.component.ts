import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/services/header.service';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from './../../models/player.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  player: Player = {
    name: 'Lárisson A',
    email: 'larissonaquino@gmail.com'
  }

  constructor(private UserService: UserService,
    private router: Router,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Login',
        icon: 'login',
        routeUrl: '/login'
      }
  }

  ngOnInit(): void { }

  read(): void {
    this.UserService.read(this.player).subscribe(() => {
      this.UserService.showMessage('Logado com sucesso!', 'X', 'success')
    }, error => this.UserService.showMessage('Erro ao fazer log in, tente novamente', 'ERRO', 'error'))
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/register'])
  }
}
