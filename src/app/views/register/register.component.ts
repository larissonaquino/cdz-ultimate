import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService,
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

  validateForm(): Boolean {
    let isInvalid: Boolean = false
    let isPasswordsDifferent: Boolean = false

    console.log('validateForm')

    if (this.player.name == null || this.player.name === '') isInvalid = true
    if (this.player.email == null || this.player.email === '') isInvalid = true
    if (this.player.password == null || this.player.password === '') isInvalid = true

    if (this.player.password !== this.confirmPassword) isPasswordsDifferent = true

    if (isInvalid) 
      this.userService.showMessage('Preencha todos os campos obrigatórios!', 'X', 'error')
      
    if (isPasswordsDifferent)
      this.userService.showMessage('Senha inválida', 'X', 'error')

    return !isInvalid && !isPasswordsDifferent
  }

  createAccount(e: any): void {
    e.preventDefault();

    if (this.validateForm()) {
      this.userService.create(this.player).subscribe((user) => {
        this.userService.showMessage('Conta criada com sucesso!', 'X', 'success')
        this.router.navigate(['/login'])
      }, error => {
        if (error.status === 422) this.userService.showMessage('E-mail já cadastrado', 'ERRO', 'error')
        if (error.status === 500) this.userService.showMessage('Erro ao cadastrar', 'ERRO', 'error')
      })
    }
  }

  cancel(e: any): void {
    e.preventDefault()
    this.router.navigate(['/login'])
  }
}
