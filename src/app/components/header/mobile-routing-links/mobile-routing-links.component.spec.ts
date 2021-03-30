import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRoutingLinksComponent } from './mobile-routing-links.component';

describe('MobileRoutingLinksComponent', () => {
  let component: MobileRoutingLinksComponent;
  let fixture: ComponentFixture<MobileRoutingLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRoutingLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRoutingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
