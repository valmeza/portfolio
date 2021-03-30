import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugWarsComponent } from './bug-wars.component';

describe('BugWarsComponent', () => {
  let component: BugWarsComponent;
  let fixture: ComponentFixture<BugWarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugWarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
