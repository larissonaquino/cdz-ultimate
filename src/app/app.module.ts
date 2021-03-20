import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'; 

import { HomeComponent } from './views/home/home.component';
import { TeamComponent } from './views/team/team.component';
import { DonateComponent } from './views/donate/donate.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PaypalComponent } from './components/paypal/paypal.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './views/profile/profile.component';
import { RulesComponent } from './views/rules/rules.component';
import { ClassesComponent } from './views/classes/classes.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DownloadComponent } from './views/download/download.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TeamComponent,
    DonateComponent,
    LoginComponent,
    RegisterComponent,
    PaypalComponent,
    ProfileComponent,
    RulesComponent,
    ClassesComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    CommonModule,
    ProgressSpinnerModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
