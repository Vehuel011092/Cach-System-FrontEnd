import { Component, HostListener, signal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DropDownMenu } from "./frontApps/drop-down-menu/drop-down-menu";
import { FooterPage } from "./frontApps/footer-page/footer-page";
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropDownMenu, FooterPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Cach-System-FrontEnd');
  private router = inject(Router);
  constructor(private viewportScroller: ViewportScroller) {}

   isScrolled = false; // Controla si se ha hecho scroll

    // Detecta si la ruta actual NO es la landing page (ruta raíz)
  isNotLanding = toSignal(
    this.router.events.pipe(
      map(() => this.router.url !== '/') // Ajusta si tu landing tiene otra ruta
    ),
    { initialValue: false }
  );

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50; // Umbral de 50px
  }

  reload() {
    window.location.reload();
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/landing-page']);
  }

  

}
