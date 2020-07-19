import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../mock-data';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  recipes = RECIPES;
  selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  public onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
