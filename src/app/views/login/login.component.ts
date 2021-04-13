import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from './../../models/player.model';
import { AuthTokenService } from 'src/app/components/services/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  player: Player = {
    name: '',
    passwd: ''
  }

  notLogged: boolean = true

  constructor(private userService: UserService,
    private router: Router,
    private authTokenService: AuthTokenService) {

    this.myForm = new FormGroup({
      nameFormControl: new FormControl('', [
        Validators.required
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    const token = this.authTokenService.getToken()
    this.userService.authorization(token).subscribe(auth => {
      this.player = auth
      this.notLogged = false
    }, error => {
      localStorage.setItem('token', '')
      this.notLogged = true
    })
  }

  login(): void {
    if (!this.validate()) return
    
    this.userService.login(this.player).subscribe(response => {
      this.userService.showMessage('Logado com sucesso!', 'X', 'success')

      localStorage.setItem('token', response.token)
      this.notLogged = false
      this.router.navigate(['/'])
    }, error => {
      if (error.status === 401) this.userService.showMessage('Usuário ou senha incorretos', 'ERRO', 'error')
      if (error.status === 500) this.userService.showMessage('Desculpe, houve um erro ao tentar logar, por favor tente mais tarde', 'ERRO', 'error')
    })
  }

  logout(): void {
    localStorage.clear()
    this.player.name = ''
    this.player.passwd = ''
    this.notLogged = true
  }

  register(): void {
    this.router.navigate(['/register'])
  }

  validate(): boolean {
    if (this.player.name.length < 1 || this.player.passwd.length < 1) {
      this.userService.showMessage('Preencha os campos de usuário e senha!', 'X', 'error')
      return false
    }

    return true
  }

  keyUp(event: any): void {
    if (event.key === "Enter") {
      this.login()
    }
  }
}
