import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    document.addEventListener('mousemove', this.trackMouse);
  }
  trackMouse(event: MouseEvent): void {
    document.documentElement.style.setProperty('--positionX', event.clientX + 'px');
    document.documentElement.style.setProperty('--positionY', event.clientY + 'px');
  }
}
