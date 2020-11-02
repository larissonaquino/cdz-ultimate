import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/app/components/services/user.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  player: Player = {
    name: 'Lárisson',
    email: 'larissonaquino@gmail.com',
    lastName: 'Aquino'
  }

  password: String = "senha8759"
  confirmPassword: String = "senha8759"

  constructor(private UserService: UserService,
    private router: Router, builder: FormBuilder) {

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
    this.UserService.create(this.player).subscribe(() => {
      this.UserService.showMessage('Conta criada com sucesso!', 'X')
      this.router.navigate(['/'])
    }, error => this.UserService.showMessage('Erro ao salvar, tente novamente', 'ERRO'))
  }

  cancel(e: any): void {
    e.preventDefault();
    this.router.navigate(['/login'])
  }
}
