import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TareasService } from '../tareas.service';

import { TareasComponent } from './tareas.component';

@Component({
  selector: 'app-tarea-item',
  template: '<li></li>'
})
class FakeTareaItemComponent {
  @Input() tarea!: any;
}


describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;
  let mockTareasService: any

  beforeEach(async () => {

    mockTareasService = jasmine.createSpyObj(TareasService, ['getTareas'])

    await TestBed.configureTestingModule({
      declarations: [
        TareasComponent,
        FakeTareaItemComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: TareasService, useValue: mockTareasService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de pintar un elemento li por cada tarea', () => {
    const mockTareas = [
      {titulo: 'Tarea 1', completada: false, id: 1},
      {titulo: 'Tarea 2', completada: true, id: 2},
    ]
    mockTareasService.getTareas.and.returnValue(of(mockTareas))

    fixture.detectChanges()

    const listItems = fixture.debugElement.queryAll(By.css('li'))
    expect(listItems).toHaveSize(3)
  })
});
