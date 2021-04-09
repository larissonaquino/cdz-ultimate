import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  urlBasePicPay: string = 'http://picpay.me/cdzultimate/'
  picPayPrices: number[] = [10, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000]

  constructor() { }

  ngOnInit(): void {
  }

}
