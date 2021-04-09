import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TeamComponent } from './views/team/team.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RulesComponent } from './views/rules/rules.component';
import { ClassesComponent } from './views/classes/classes.component';
import { DownloadComponent } from './views/download/download.component';
import { CashComponent } from './views/cash/cash.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  // {
  //   path: 'cash',
  //   component: CashComponent
  // },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
