import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { JrlRecipesComponent } from './jrl-recipes/jrl-recipes.component';
import { AaRecipesComponent } from './aa-recipes/aa-recipes.component';
import { SjaRecipesComponent } from './sja-recipes/sja-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  , { path: 'home', component: HomeComponent }
  , { path: 'estes-recipes', component: MenusComponent }
  , { path: 'jrl-recipes', component: JrlRecipesComponent }
  , { path: 'sja-recipes', component: SjaRecipesComponent }
  , { path: 'aa-recipes', component: AaRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
