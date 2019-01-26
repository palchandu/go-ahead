import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomlyComponent } from './randomly.component';

describe('RandomlyComponent', () => {
  let component: RandomlyComponent;
  let fixture: ComponentFixture<RandomlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
