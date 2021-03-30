import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeProjectComponent } from './coffee-project.component';

describe('CoffeeProjectComponent', () => {
  let component: CoffeeProjectComponent;
  let fixture: ComponentFixture<CoffeeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
