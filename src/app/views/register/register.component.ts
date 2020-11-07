import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from 'src/app/models/player.model';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  player: Player = {
    name: '',
    email: '',
    lastName: '',
    password: ''
  }

  confirmPassword: String = ''

  constructor(private UserService: UserService,
    private router: Router,
    private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Registre-se',
      icon: 'person_add',
      routeUrl: '/register'
    }

    this.myForm = new FormGroup({
      nameFormControl: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(3)
      ]),
      lastNameFormControl: new FormControl('', [
        Validators.maxLength(30)
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ]),
      confirmPasswordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void { }

  createAccount(e: any): void {
    e.preventDefault();

    if (this.player.password !== this.confirmPassword) {
      this.UserService.showMessage('Senha inválida', 'X', 'error')
      return
    }

    this.UserService.create(this.player).subscribe((user) => {
      this.UserService.showMessage('Conta criada com sucesso!', 'X', 'success')
      this.router.navigate(['/login'])
    }, error => {
      if (error.status === 422) this.UserService.showMessage('E-mail já cadastrado', 'ERRO', 'error')
      if (error.status === 500) this.UserService.showMessage('Erro ao cadastrar', 'ERRO', 'error')
    })
  }

  cancel(e: any): void {
    e.preventDefault()
    this.router.navigate(['/login'])
  }
}
