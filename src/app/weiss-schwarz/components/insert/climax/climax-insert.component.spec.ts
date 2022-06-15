import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClimaxInsertComponent} from './climax-insert.component';

describe('ClimaxInsertComponent', () => {
  let component: ClimaxInsertComponent;
  let fixture: ComponentFixture<ClimaxInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimaxInsertComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaxInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
