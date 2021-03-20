import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/services/user.service';
import { Router } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {
      path: '../../../assets/classes/andromeda.jpg'
    },
    {
      path: '../../../assets/classes/cisne.jpg'
    },
    {
      path: '../../../assets/classes/dragao.jpg'
    },
    {
      path: '../../../assets/classes/pegasus.jpg'
    }
  ]

  constructor(private userService: UserService) { }

  ngOnInit(): void { }
}
