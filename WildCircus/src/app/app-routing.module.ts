import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistsComponent } from './artists/artists.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent, data: { animation: 'homePage' } },
  { path: 'artists', component: ArtistsComponent, data: { animation: 'artistPage' } },
  { path: 'reservation', component: ReservationComponent, data: { animation: 'reservationPage' } },
  { path: 'admin', component: AdminpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
