import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.isLogged = this.headerService.headerData.logged
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

  get logged(): boolean {
    return this.headerService.headerData.logged
  }

  set logged(value: boolean) {
    this.isLogged = value
  }
}
