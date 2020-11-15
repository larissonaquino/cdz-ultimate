import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from './../../models/player.model';
import { HeaderService } from 'src/app/components/services/header.service';
import { AuthTokenService } from 'src/app/components/services/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  player: Player = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService,
    private router: Router,
    private headerService: HeaderService,
    private authTokenService: AuthTokenService) {

    headerService.headerData = {
      title: 'Login',
      icon: 'login',
      routeUrl: '/login'
    }

    this.myForm = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    const token = this.authTokenService.getToken()

    if (token == null || token == '') return

    this.userService.authorization(token).subscribe(res => {
      this.userService.showMessage('Você já está logado!', 'ERRO', 'error')
      this.router.navigate(['/'])
    }, error => localStorage.setItem('token', ''))
  }

  login(): void {
    this.userService.login(this.player).subscribe(response => {
      this.userService.showMessage('Logado com sucesso!', 'X', 'success')

      this.userService.logged = true

      localStorage.setItem('token', response.token)
      this.router.navigate(['/'])
    }, error => {
      if (error.status === 401) this.userService.showMessage('E-mail ou senha incorretos', 'ERRO', 'error')
    })
  }
}
