import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Doar',
      icon: 'attach_money',
      routeUrl: '/donate'
    }
   }

  ngOnInit(): void {
  }

}
