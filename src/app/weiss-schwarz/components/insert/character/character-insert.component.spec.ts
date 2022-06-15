import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterInsertComponent} from './insert.component';

describe('InsertComponent', () => {
  let component: CharacterInsertComponent;
  let fixture: ComponentFixture<CharacterInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterInsertComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
