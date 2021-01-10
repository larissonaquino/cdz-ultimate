import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';
import { TeamService } from './../../components/services/team.service';
import { Team } from 'src/app/models/team.model';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team[] = []

  constructor(private userService: UserService,
    private headerService: HeaderService,
    private teamService: TeamService) {
    headerService.headerData = {
      title: 'Equipe',
      icon: 'people',
      routeUrl: '/team',
      logged: headerService.headerData.logged
    }
  }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe(team => {
      this.team = team
    }, err => {
      this.userService.showMessage('Não foi possível carregar a página, tente novamente...', 'X', 'error')
    })
  }
}
