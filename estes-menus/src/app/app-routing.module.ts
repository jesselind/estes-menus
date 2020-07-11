import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }
  , { path: 'home', component: HomeComponent }
  , { path: 'menus', component: MenusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
