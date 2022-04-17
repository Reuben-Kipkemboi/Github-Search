import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  // path to our home page
  {
    path: "home",
    component: HomeComponent,
  },
  // path to our main page
  {
    path: "main",
    component: MainComponent,
  },
  // route  to our github users details page
  {
    path: "user/:id",
    component: DetailsComponent,
  },
  { path: '', redirectTo: "/home", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
