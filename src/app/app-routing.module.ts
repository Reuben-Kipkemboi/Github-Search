import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {
  path: "home",
  component: HomeComponent,
  },

  {
    path: "main",
    component: MainComponent,
    },
    { path: '', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
