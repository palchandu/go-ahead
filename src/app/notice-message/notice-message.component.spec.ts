import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeMessageComponent } from './notice-message.component';

describe('NoticeMessageComponent', () => {
  let component: NoticeMessageComponent;
  let fixture: ComponentFixture<NoticeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
