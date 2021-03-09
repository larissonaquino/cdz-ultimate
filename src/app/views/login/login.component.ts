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
    email: '',
    passwd: ''
  }

  constructor(private userService: UserService,
    private router: Router,
    private authTokenService: AuthTokenService) {

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

  ngOnInit(): void { }

  login(): void {
    if (!this.validate()) return
    
    this.userService.login(this.player).subscribe(response => {
      console.log('login')
      this.userService.showMessage('Logado com sucesso!', 'X', 'success')

      localStorage.setItem('token', response.token)
      this.router.navigate(['/'])
    }, error => {
      if (error.status === 401) this.userService.showMessage('E-mail ou senha incorretos', 'ERRO', 'error')
    })
  }

  validate(): boolean {
    if (this.player.email.length < 1 || this.player.passwd.length < 1) {
      this.userService.showMessage('Preencha os campos de usuário e senha!', 'X', 'error')
      return false
    }

    return true
  }

  keyUp(event: any): void {
    if (event.key === "Enter") {
      console.log('enter login')
      this.login()
    }
  }
}
