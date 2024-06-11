import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.css'
})
export class ListaPacientesComponent {
  contactos = [
    { nombre: 'Juan', apellido: 'Pérez', telefono: '123456789' },
    { nombre: 'Ana', apellido: 'Gómez', telefono: '987654321' },
    { nombre: 'Luis', apellido: 'Rodríguez', telefono: '456123789' },
  ];

  verContacto(contacto: any) {
    alert(`Ver contacto: ${contacto.nombre} ${contacto.apellido}`);
  }

  editarContacto(contacto: any) {
    alert(`Editar contacto: ${contacto.nombre} ${contacto.apellido}`);
  }
}
