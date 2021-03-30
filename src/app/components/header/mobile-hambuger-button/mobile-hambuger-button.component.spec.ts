import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHambugerButtonComponent } from './mobile-hambuger-button.component';

describe('MobileHambugerButtonComponent', () => {
  let component: MobileHambugerButtonComponent;
  let fixture: ComponentFixture<MobileHambugerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHambugerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHambugerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
