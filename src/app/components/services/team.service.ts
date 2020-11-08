import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/team`)
  }
}
