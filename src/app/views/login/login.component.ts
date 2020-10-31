import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.loginService.showMessage('Logado com sucesso!')
  }

  navigateToAccountCreate(): void {
    this.router.navigate(['/register']);
    console.log('navigating...');
  }

}
