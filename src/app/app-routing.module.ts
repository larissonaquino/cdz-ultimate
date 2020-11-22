import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TeamComponent } from './views/team/team.component';
import { DonateComponent } from './views/donate/donate.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RulesComponent } from './views/rules/rules/rules.component';
import { ClassesComponent } from './views/classes/classes/classes.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
