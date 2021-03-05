import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false

  constructor() { }

  ngOnInit(): void { }

  set logged(value: boolean) {
    this.isLogged = value
  }
}
