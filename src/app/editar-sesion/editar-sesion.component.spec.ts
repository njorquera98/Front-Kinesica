import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSesionComponent } from './editar-sesion.component';

describe('EditarSesionComponent', () => {
  let component: EditarSesionComponent;
  let fixture: ComponentFixture<EditarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
