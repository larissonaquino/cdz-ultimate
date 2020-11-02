import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Equipe',
      icon: 'people',
      routeUrl: '/team'
    }
   }

  ngOnInit(): void {
  }

}
