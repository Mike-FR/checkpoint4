import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, CollapseModule, RatingModule, BsDatepickerModule, PopoverModule} from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistsComponent } from './artists/artists.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DbWildCircusService } from './db-wild-circus.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ArtistsComponent,
    ReservationComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [DbWildCircusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
