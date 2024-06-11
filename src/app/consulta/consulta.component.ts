import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
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


  consultas = [
    {
      consulta: 1,
      fecha: "2024-06-10",
      hora: "09:00",
      indicaciones: "Realizar ejercicios de rehabilitación",
      tratamiento: "Fisioterapia y descanso",
    },
    {
      consulta: 2,
      fecha: "2024-07-05",
      hora: "10:30",
      indicaciones: "Continuar con la medicación",
      tratamiento: "Medicamentos antiinflamatorios",
    },
    {
      consulta: 3,
      fecha: "2024-08-20",
      hora: "14:15",
      indicaciones: "Revisión de la lesión",
      tratamiento: "Consulta con especialista en ortopedia",
    },
  ];

  constructor() {
    // Ordenar las sesiones por número de sesión en orden descendente
    this.consultas.sort((a, b) => b.consulta - a.consulta);
  }
}
