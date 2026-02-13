import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './extraPages/landing-page/landing-page'; // Asegúrate que el nombre de la clase sea correcto
import { EscuelaParaNinos } from './extraPages/escuela-para-ninos/escuela-para-ninos';
import { EscuelaParaJovenes } from './extraPages/escuela-para-jovenes/escuela-para-jovenes';
import { DepartamentoDeLenguas } from './extraPages/departamento-de-lenguas/departamento-de-lenguas';


export const routes: Routes = [
  { path: 'escuela-para-ninos', component: EscuelaParaNinos },
  { path: 'escuela-para-jovenes', component: EscuelaParaJovenes },
  { path: 'departamento-de-lenguas', component: DepartamentoDeLenguas },
  { path: '', component: LandingPage, pathMatch: 'full' }, // importante: pathMatch full
  { path: '**', redirectTo: '' } // redirige rutas no encontradas a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // 👈 AÑADE ESTO
    anchorScrolling: 'enabled' // opcional, si usas anclas
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
