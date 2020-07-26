import { Component, OnInit } from '@angular/core';
import { SJARECIPES } from '../mock-data';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-sja-recipes',
  templateUrl: './sja-recipes.component.html',
  styleUrls: ['./sja-recipes.component.scss']
})
export class SjaRecipesComponent implements OnInit {
  recipes = SJARECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  public onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
