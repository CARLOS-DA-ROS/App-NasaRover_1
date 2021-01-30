import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { RoversComponent } from './components/rovers/rovers.component';

// SERVICIOS
import { NasapiService } from './services/nasapi.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // ngRouterModule.forRoot( ROUTES )
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    RoversComponent
  ],
  providers: [
    NasapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
