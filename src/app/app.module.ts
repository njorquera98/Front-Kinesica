import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { SesionComponent } from './sesion/sesion.component';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';
import { NuevaSesionComponent } from './nueva-sesion/nueva-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ListaPacientesComponent,
    NuevoPacienteComponent,
    PacienteComponent,
    ConsultaComponent,
    EvaluacionComponent,
    SesionComponent,
    EditarSesionComponent,
    NuevaSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
