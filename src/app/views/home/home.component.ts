import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/services/user.service';
import { HeaderService } from './../../components/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService, private userService: UserService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/',
      logged: headerService.headerData.logged
    }
  }

  ngOnInit(): void { }
}
