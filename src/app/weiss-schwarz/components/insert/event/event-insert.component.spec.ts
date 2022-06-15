import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventInsertComponent} from './event-insert.component';

describe('EventInsertComponent', () => {
  let component: EventInsertComponent;
  let fixture: ComponentFixture<EventInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventInsertComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
