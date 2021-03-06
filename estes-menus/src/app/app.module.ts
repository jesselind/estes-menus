import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenusComponent } from './menus/menus.component';
import { JrlRecipesComponent } from './jrl-recipes/jrl-recipes.component';
import { AaRecipesComponent } from './aa-recipes/aa-recipes.component';
import { MasterMenuComponent } from './master-menu/master-menu.component';
import { SjaRecipesComponent } from './sja-recipes/sja-recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    MenusComponent,
    JrlRecipesComponent,
    AaRecipesComponent,
    MasterMenuComponent,
    SjaRecipesComponent,
    DashboardComponent,
    AllRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
