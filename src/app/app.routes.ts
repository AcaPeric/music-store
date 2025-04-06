import { Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: 'instruments', component: InstrumentsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'artists', pathMatch: 'full' }
];
