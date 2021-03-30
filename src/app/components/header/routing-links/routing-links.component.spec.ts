import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLinksComponent } from './routing-links.component';

describe('RoutingLinksComponent', () => {
  let component: RoutingLinksComponent;
  let fixture: ComponentFixture<RoutingLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
