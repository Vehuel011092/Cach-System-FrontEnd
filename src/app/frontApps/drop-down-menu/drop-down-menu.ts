import { Component, inject, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { Navegacion } from './../../services/navegacion';


@Component({
  selector: 'app-drop-down-menu',
  imports: [Menu, MenuContent, MenuItem, MenuTrigger, OverlayModule],
  templateUrl: './drop-down-menu.html',
  styleUrl: './drop-down-menu.scss',
})
export class DropDownMenu {
  constructor(public navegacion: Navegacion) { }

  formatMenu = viewChild<Menu<string>>('formatMenu');
  categorizeMenu = viewChild<Menu<string>>('categorizeMenu');
  mainMenu = viewChild<Menu<string>>('mainMenu');
  private breakpointObserver = inject(BreakpointObserver);

 irAAdmisiones() {
  this.mainMenu()?.close();
  this.navegacion.irAAdmisiones();
}
  isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

  desktopPositions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 4 },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -4 },
    { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 4 },
    { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -4 },
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 4 }
  ];

  mobilePositions: ConnectedPosition[] = [
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8 },
    { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -8 }
  ];

  get overlayPositions(): ConnectedPosition[] {
    return this.isMobile() ? this.mobilePositions : this.desktopPositions;
  }
}