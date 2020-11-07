import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from './../../models/player.model';
import { HeaderService } from 'src/app/components/services/header.service';

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

  constructor(private UserService: UserService,
    private router: Router,
    private headerService: HeaderService) {

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

  ngOnInit(): void { }

  login(): void {
    console.log(this.player)
    this.UserService.login(this.player).subscribe((response) => {
      this.UserService.showMessage('Logado com sucesso!', 'X', 'success')
      this.router.navigate(['/'])
    }, error => {
      if (error.status === 401) this.UserService.showMessage('E-mail ou senha incorretos', 'ERRO', 'error')
    })
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/register'])
  }
}
