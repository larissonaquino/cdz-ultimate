import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient, 
    private snackBar: MatSnackBar) { }

  showMessage(msg: string, action: string, type: string): void {
    this.snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [`msg-${type}`]
    })
  }

  create(player: any): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/register`, player)
  }
  
  login(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/login`, player)
  }
}
