import { UserService } from 'src/app/components/services/user.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: Boolean

  constructor(private headerService: HeaderService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.isLogged = this.userService.logged
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  get logged(): Boolean {
    return this.isLogged
  }

  set logged(value: Boolean) {
    this.isLogged = value
  }
}
