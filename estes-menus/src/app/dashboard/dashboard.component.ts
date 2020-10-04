import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() group: string;

  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
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
