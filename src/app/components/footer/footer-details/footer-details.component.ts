import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.scss'],
})
export class FooterDetailsComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    this.currentYear;
  }
}
