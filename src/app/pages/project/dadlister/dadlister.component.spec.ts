import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadlisterComponent } from './dadlister.component';

describe('DadlisterComponent', () => {
  let component: DadlisterComponent;
  let fixture: ComponentFixture<DadlisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadlisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadlisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
