import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CringeDadJokeGeneratorComponent } from './cringe-dad-joke-generator.component';

describe('CringeDadJokeGeneratorComponent', () => {
  let component: CringeDadJokeGeneratorComponent;
  let fixture: ComponentFixture<CringeDadJokeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CringeDadJokeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CringeDadJokeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
