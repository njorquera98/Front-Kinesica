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
    telefono: "77543295",
    correo: "juan.perez@gmail.com",
    prevision: "CAPITAL",
    fechaNacimiento: "1990-05-15",
  };

  patologia = {
    cardiovascular: "Ninguna",
    pulmonares: "Ninguna",
    digestivas: "Ninguna",
    diabetes: "Ninguna",
    renales: "Ninguna",
    quirurgicos: "Ninguna",
    alergicos: "Ninguna",
    transfusiones: "Ninguna",
    medicamentos: "Ninguna",
    actividad_fisica: "Ninguna",
  };

  no_patologica = {
    alcohol: "Si",
    tabaquismo: "Diario",
    drogas: "No",
    inmunizaciones: "No",

  }

  consultas = [
    {
      consulta: 1,
      fecha: "2024-06-10",
      hora: "09:00",
      diagnostico: "Lesion de esguinse grado 1",
      indicaciones: "Realizar ejercicios de rehabilitación",
      tratamiento: "Fisioterapia y descanso",
    },
    {
      consulta: 2,
      fecha: "2024-07-05",
      hora: "10:30",
      diagnostico: "Lesion en mejor estado",
      indicaciones: "Continuar con la medicación",
      tratamiento: "Medicamentos antiinflamatorios",
    },
    {
      consulta: 3,
      fecha: "2024-08-20",
      hora: "14:15",
      diagnostico: "Lesion persiste derivacion a especialista",
      indicaciones: "Revisión de la lesión",
      tratamiento: "Consulta con especialista en ortopedia",
    },
  ];

  constructor() {
    // Ordenar las sesiones por número de sesión en orden descendente
    this.consultas.sort((a, b) => b.consulta - a.consulta);
  }
}
