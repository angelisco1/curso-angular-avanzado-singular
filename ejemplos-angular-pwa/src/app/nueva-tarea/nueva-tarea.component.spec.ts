import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TareasService } from '../tareas.service';

import { NuevaTareaComponent } from './nueva-tarea.component';

fdescribe('NuevaTareaComponent', () => {
  let component: NuevaTareaComponent;
  let fixture: ComponentFixture<NuevaTareaComponent>;
  let tareasService: any
  let router: any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaTareaComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTareaComponent);
    component = fixture.componentInstance;
    tareasService = TestBed.inject(TareasService)
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de llamarse al createTarea con los datos de una tarea', () => {
    spyOn(tareasService, 'createTarea').and.returnValue(of({}))
    spyOn(router, 'navigate')

    component.formTarea.get('titulo')?.setValue('Tarea 1')

    component.guardar()

    expect(tareasService.createTarea).toHaveBeenCalledOnceWith({titulo: 'Tarea 1', completada: false})
    expect(router.navigate).toHaveBeenCalledOnceWith(['/'])
  })

  it('debería de estar deshabilitado el botón inicialmente', () => {
    // fixture.detectChanges()
    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeTrue()
  })

  it('debería de estar habilitado el botón cuando rellenamos el campo titulo', () => {
    component.formTarea.get('titulo')?.setValue('Tarea 1')
    fixture.detectChanges()
    const button = fixture.debugElement.query(By.css('button'))

    expect(button.nativeElement.disabled).toBeFalse()
    // expect(true).toThrowError()
  })
});
