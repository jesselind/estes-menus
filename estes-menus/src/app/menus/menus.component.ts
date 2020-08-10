import { Component, OnInit } from '@angular/core';
// import { ESTESRECIPES } from '../mock-data';
// import { Recipe } from '../recipe';
// import { RECIPES } from '../mock-data2';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})

export class MenusComponent implements OnInit {
  // recipes = ESTESRECIPES;
  // recipes = RECIPES;
  // selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  // public onSelect(recipe: Recipe): void {
  //   this.selectedRecipe = recipe;
  // }

}
