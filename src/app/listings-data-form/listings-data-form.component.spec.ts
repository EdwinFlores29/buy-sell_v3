import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsDataFormComponent } from './listings-data-form.component';

describe('ListingsDataFormComponent', () => {
  let component: ListingsDataFormComponent;
  let fixture: ComponentFixture<ListingsDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingsDataFormComponent]
    });
    fixture = TestBed.createComponent(ListingsDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
