import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-data2';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}
