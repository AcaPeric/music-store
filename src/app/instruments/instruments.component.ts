// src/app/instruments/instruments.component.ts
import { Component } from '@angular/core';
import { MusicService } from '../music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instruments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent {
  instruments: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.getInstruments().subscribe((data) => {
      this.instruments = data;
    });
  }
}
