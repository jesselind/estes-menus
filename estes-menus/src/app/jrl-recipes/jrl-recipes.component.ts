import { Component, OnInit } from '@angular/core';
import { JRLRECIPES } from '../mock-data';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-data2';

@Component({
  selector: 'app-jrl-recipes',
  templateUrl: './jrl-recipes.component.html',
  styleUrls: ['./jrl-recipes.component.scss']
})
export class JrlRecipesComponent implements OnInit {
  // recipes = JRLRECIPES;
  recipes = RECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  public onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
