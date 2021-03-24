import { Component, OnInit } from '@angular/core';
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
  isLoaded: boolean = false
  isServiceOff: boolean = false

  constructor(private userService: UserService,
    private teamService: TeamService) { }

  ngOnInit(): void {
    this.isLoaded = false
    this.teamService.getTeam().subscribe(team => {
      this.team = team
      this.isLoaded = true
    }, err => {
      this.userService.showMessage('Não foi possível carregar a página, tente novamente...', 'X', 'error')
      this.isServiceOff = true
    })
  }
}
