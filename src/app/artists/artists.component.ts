// src/app/artists/artists.component.ts
import { Component } from '@angular/core';
import { MusicService } from '../music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  artists: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.getArtists().subscribe((data) => {
      this.artists = data;
    });
  }
}
