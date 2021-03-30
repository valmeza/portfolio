import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
  styleUrls: ['./konami-code.component.scss'],
})
export class KonamiCodeComponent implements OnInit {
  konamiCode: string = '38384040373937396665';
  code: string = '';
  race: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.startRace();
  }

  @HostListener('document:keydown', ['$event'])
  keyboardEvent(event: KeyboardEvent) {
    this.code += event.which;
    this.startRace();
  }

  startRace(): void {
    if (this.code === this.konamiCode) {
      console.log('Here we gooooo!');
      this.race = true;
      setTimeout(() => {
        this.race = false;
      }, 5000);
    }
  }
}
