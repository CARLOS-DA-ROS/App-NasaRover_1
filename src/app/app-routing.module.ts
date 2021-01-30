import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RoversComponent } from './components/rovers/rovers.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: 'search/:' , component: SearchComponent},
  { path: 'rovers' , component: RoversComponent},
  { path: '**' , pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
