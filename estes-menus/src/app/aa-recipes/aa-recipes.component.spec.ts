import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaRecipesComponent } from './aa-recipes.component';

describe('AaRecipesComponent', () => {
  let component: AaRecipesComponent;
  let fixture: ComponentFixture<AaRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
