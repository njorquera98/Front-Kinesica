import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  // Datos estáticos del paciente y las sesiones
  paciente = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 35,
    telefono: "123456789",
    correo: "juan@example.com",
    prevision: "CAPITAL",
    fechaNacimiento: "1990-05-15",
    fechaIngreso: "2024-01-01",
    objetivo: "Mejorar condición física",
    evaluacion: "Buena evolución",
    diagnostico: "Lesión en rodilla",
  };

  sesiones = [
    {
      sesion: 1,
      fecha: "2024-01-05",
      hora: "10:00",
      descripcion: "Evaluación inicial y diagnóstico",
    },
    {
      sesion: 2,
      fecha: "2024-01-10",
      hora: "11:30",
      descripcion: "Inicio de tratamiento físico",
    },
    // Más sesiones...
  ];
  constructor() {
    // Ordenar las sesiones por número de sesión en orden descendente
    this.sesiones.sort((a, b) => b.sesion - a.sesion);
  }
}
