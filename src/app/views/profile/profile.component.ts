import { AuthTokenService } from './../../components/services/auth-token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/components/services/user.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myForm: FormGroup;

  player: Player = {
    name: '',
    email: '',
    passwd: ''
  }

  newPassword: string = ''
  passwordConfirm: string = ''

  constructor(private userService: UserService,
    private authTokenService: AuthTokenService,
    private router: Router) {

    this.myForm = new FormGroup({
      lastNameFormControl: new FormControl('', [
        Validators.maxLength(30)
      ]),
      emailFormControl: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      confirmPasswordFormControl: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ])
    })
  }

  ngOnInit(): void {
    const token = this.authTokenService.getToken()
    this.userService.authorization(token).subscribe(auth => {
      this.player = auth
    }, error => {
      if (error.status = 403) this.userService.showMessage('Você não está logado, entre com sua conta', 'ERRO', 'error')
      this.router.navigate(['/'])
    })
  }

  validate(): boolean {
    let invalidPassword: boolean = false

    if (this.player.passwd.length < 3 || this.player.passwd.length > 10) invalidPassword = true

    if (this.newPassword.length < 3 || this.newPassword.length > 10) invalidPassword = true

    if (this.passwordConfirm.length < 3 || this.passwordConfirm.length > 10) invalidPassword = true

    if (invalidPassword)
      this.userService.showMessage('A senha deve haver entre 4 e 10 caracteres!', 'ERRO', 'error')

    if (this.newPassword !== this.passwordConfirm)
      this.userService.showMessage('Senha inválida. Certifique-se de que digitou corretamente nos dois campos!', 'ERRO', 'error')

    return !invalidPassword
  }

  save(e: any): void {
    e.preventDefault()

    if (!this.validate()) {
      return
    }

    const token = this.authTokenService.getToken()
    this.userService.authorization(token).subscribe(auth => {
      this.player = auth
    }, error => {
      if (error.status = 403) this.userService.showMessage('Você não está logado, entre com sua conta', 'ERRO', 'error')
      this.router.navigate(['/'])
    })

    this.userService.changePassword(this.player, this.newPassword).subscribe(res => {
      this.userService.showMessage('Senha alterada com sucesso!', 'X', 'success')
    }, error => {
      if (error.status === 401) this.userService.showMessage('Não foi possível trocar a senha, verifique se a senha atual está correta', 'ERRO', 'error')
    })
  }
}
