import { Component, OnInit } from '@angular/core';

export interface Recipe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  recipes: Recipe[] = [
    { value: 'kebabs', viewValue: 'Mediterranean Chicken Kebabs' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
