import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InsertsListComponent} from './inserts-list.component';

describe('InsertsComponent', () => {
  let component: InsertsListComponent;
  let fixture: ComponentFixture<InsertsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
