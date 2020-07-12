import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrlRecipesComponent } from './jrl-recipes.component';

describe('JrlRecipesComponent', () => {
  let component: JrlRecipesComponent;
  let fixture: ComponentFixture<JrlRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrlRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrlRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
