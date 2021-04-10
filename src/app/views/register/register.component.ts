import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from 'src/app/models/player.model';
import { AuthTokenService } from 'src/app/components/services/auth-token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup

  player: Player = {
    name: '',
    email: '',
    passwd: ''
  }

  confirmPassword: String = ''

  termosDisabled: boolean = true

  constructor(private userService: UserService,
    private router: Router,
    private authTokenService: AuthTokenService) {

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

  ngOnInit(): void {
    const token = this.authTokenService.getToken()
    this.userService.authorization(token).subscribe(auth => {
      this.router.navigate(['/'])
      this.userService.showMessage('Você já está logado', 'X', 'error')
    }, error => { })
  }

  validateForm(): Boolean {
    let isInvalid: Boolean = false
    let isUsernameLengthInvalid: Boolean = false
    let isPasswordsDifferent: Boolean = false
    let isPasswordInvalid: Boolean = false

    if (this.player.name == null || this.player.name === '') isInvalid = true
    if (this.player.name.length < 4 || this.player.name.length > 10 ) isUsernameLengthInvalid = true
    if (this.player.email == null || this.player.email === '') isInvalid = true
    if (this.player.passwd == null || this.player.passwd === '') isInvalid = true

    if (this.player.passwd !== this.confirmPassword) isPasswordsDifferent = true
    if (this.player.passwd.length < 4 || this.player.passwd.length > 10) isPasswordInvalid = true

    if (isInvalid)
      this.userService.showMessage('Preencha todos os campos obrigatórios!', 'X', 'error')

    if (isUsernameLengthInvalid)
      this.userService.showMessage('Usuário deve conter entre 4 e 10 caracteres!', 'X', 'error')

    if (isPasswordsDifferent)
      this.userService.showMessage('Senha inválida. Certifique-se de que digitou corretamente nos dois campos', 'X', 'error')

    if (isPasswordInvalid)
      this.userService.showMessage('Senha deve conter entre 4 e 10 caracteres', 'X', 'error')

    return !isInvalid && !isPasswordsDifferent && !isUsernameLengthInvalid && !isPasswordInvalid
  }

  createAccount(e: any): void {
    e.preventDefault();

    if (this.validateForm()) {
      this.userService.create(this.player).subscribe((user) => {
        this.userService.showMessage('Conta criada com sucesso!', 'X', 'success')
        this.router.navigate(['/login'])
      }, error => {
        if (error.status === 422) this.userService.showMessage('Usuário ou e-mail já cadastrado', 'ERRO', 'error')
        if (error.status === 500) this.userService.showMessage('Erro ao cadastrar', 'ERRO', 'error')
      })
    }
  }

  cancel(e: any): void {
    e.preventDefault()
    this.router.navigate(['/login'])
  }
  
  alphanumeric(e: any): void {
    let letterNumber = /^[0-9a-z]+$/;

    if (!e.key.match(letterNumber) && !(e.key == 'Backspace')  && !(e.key == 'Tab'))
      e.preventDefault()
  }
}
