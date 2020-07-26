import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjaRecipesComponent } from './sja-recipes.component';

describe('SjaRecipesComponent', () => {
  let component: SjaRecipesComponent;
  let fixture: ComponentFixture<SjaRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjaRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjaRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
