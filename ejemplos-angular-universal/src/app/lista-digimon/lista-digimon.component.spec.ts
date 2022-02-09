import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDigimonComponent } from './lista-digimon.component';

describe('ListaDigimonComponent', () => {
  let component: ListaDigimonComponent;
  let fixture: ComponentFixture<ListaDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
