import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { SesionComponent } from './sesion/sesion.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';
import { NuevaSesionComponent } from './nueva-sesion/nueva-sesion.component';

const routes: Routes = [

  { path: 'login', component: LogInComponent },
  { path: 'lista', component: ListaPacientesComponent },
  { path: 'nuevo-paciente', component: NuevoPacienteComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'evaluacion', component: EvaluacionComponent },
  { path: 'editar-sesion', component: EditarSesionComponent },
  { path: 'nueva-sesion', component: NuevaSesionComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'consulta', component: ConsultaComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
