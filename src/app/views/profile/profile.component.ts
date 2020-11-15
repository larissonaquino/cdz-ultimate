import { AuthTokenService } from './../../components/services/auth-token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/components/services/header.service';
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
    lastName: '',
    password: ''
  }

  constructor(private userService: UserService,
    private authTokenService: AuthTokenService,
    private router: Router,
    private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Perfil',
      icon: 'person',
      routeUrl: '/'
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
    })
  }

  ngOnInit(): void {
    const token = this.authTokenService.getToken()
    this.userService.authorization(token).subscribe(auth => {
      this.player = this.authTokenService.decodePayloadJWT()
    }, error => {
      if (error.status = 403) this.userService.showMessage('Você não está logado, entre com sua conta', 'ERRO', 'error')
      this.router.navigate(['/login'])
    })
  }

  save(e: any) {
    e.preventDefault()

    console.log('save')
  }
}
