import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  topGap = 570

  constructor() {
    document.addEventListener('scroll', () => {
      this.topGap = Math.max(0, 570 - document.body.parentElement.scrollTop);
    })
  }

  ngOnInit(): void { }

}
