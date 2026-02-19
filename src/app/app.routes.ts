import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewComponent } from './components/pages/new/new.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
