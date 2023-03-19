import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConfigPageComponent } from './pages/config-page/config-page.component';
import { UserDataPageComponent } from './pages/user-data-page/user-data-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "config",
    component: ConfigPageComponent
  },
  {
    path: "user",
    component: UserDataPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
