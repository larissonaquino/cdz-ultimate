import { Router } from '@angular/router';
import { LoginService } from './../../components/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.loginService.showMessage('Conta criada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/login'])
  }
}
