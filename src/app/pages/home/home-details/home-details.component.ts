import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss'],
})
export class HomeDetailsComponent implements OnInit {
  fullName = 'Valeria Cuevas Meza';
  hour: number = new Date().getHours();
  greeting: string = '';
  icon: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getCurrentHour();
  }

  getCurrentHour(): void {
    if (this.hour < 12) {
      this.greeting = 'morning';
      this.icon = 'far fa-sun';
    } else if (this.hour >= 12 && this.hour <= 17) {
      this.greeting = 'afternoon';
      this.icon = 'far fa-sun'
    } else if (this.hour > 17 && this.hour <= 24) {
      this.greeting = 'evening';
      this.icon = 'far far-moon'
    }
  }
}
