import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';
import { TeamService } from './../../components/services/team.service';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team[] = []

  constructor(private headerService: HeaderService, private teamService: TeamService) {
    headerService.headerData = {
      title: 'Equipe',
      icon: 'people',
      routeUrl: '/team'
    }
  }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe(team => {
      this.team = team
    })
  }
}
