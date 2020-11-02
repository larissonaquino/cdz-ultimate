import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void { }

  read(): void {
    this.UserService.read(this.player).subscribe(() => {
      this.UserService.showMessage('Logado com sucesso!', 'X')
    }, error => this.UserService.showMessage('Erro ao fazer log in, tente novamente', 'ERRO'))
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/register']);
    console.log('navigating...');
  }
}
