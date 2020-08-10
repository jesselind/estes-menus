import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-data2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() group: string;

  recipes = RECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  public onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
