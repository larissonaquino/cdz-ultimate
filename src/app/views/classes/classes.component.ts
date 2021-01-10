import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/services/header.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Classes',
      icon: 'compare',
      routeUrl: '/classes',
      logged: headerService.headerData.logged
    }
  }

  ngOnInit(): void { }

}
