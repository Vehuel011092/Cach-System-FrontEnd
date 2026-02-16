
// services/navegacion.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Disponible en toda la app
})
export class Navegacion {

  constructor(private router: Router) {}

  irAAdmisiones(): void {
    // Aquí pones la lógica que tenías en el componente
    // Por ejemplo, navegar a la página de admisiones
    this.router.navigate(['/admisiones']);
    
    // Si tenías más lógica (ej. recargar, analytics, etc.), la agregas aquí
  }
}