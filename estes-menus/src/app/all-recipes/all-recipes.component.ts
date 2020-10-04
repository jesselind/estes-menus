import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  public onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

}
