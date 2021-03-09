import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:3000/api"

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
  
  login(player: Player): Observable<any> {
    return this.http.post<Player>(`${this.baseUrl}/authenticate`, player)
  }

  getUserByEmail(email: string): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/userByEmail`, { params: { email } })
  }

  authorization(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }

    return this.http.post<any>(`${this.baseUrl}/authorization`, null, httpOptions)
  }
}
