import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  percentage = 0.85
  topGap = (window.innerHeight * this.percentage) + 70

  constructor() {
    document.addEventListener('scroll', () => {
      this.topGap = Math.max(0, ((window.innerHeight * this.percentage) + 70) - document.body.parentElement.scrollTop);
    })
  }

  ngOnInit(): void { }

}
