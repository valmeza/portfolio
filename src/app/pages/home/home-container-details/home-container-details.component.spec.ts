import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainerDetailsComponent } from './home-container-details.component';

describe('HomeContainerDetailsComponent', () => {
  let component: HomeContainerDetailsComponent;
  let fixture: ComponentFixture<HomeContainerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContainerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
