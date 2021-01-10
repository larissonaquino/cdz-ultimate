import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(private headerService: HeaderService, private userService: UserService) {
    headerService.headerData = {
      title: 'Doar',
      icon: 'attach_money',
      routeUrl: '/donate',
      logged: headerService.headerData.logged
    }
   }

  ngOnInit(): void { }

}
