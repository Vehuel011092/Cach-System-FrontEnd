import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-departamento-de-lenguas',
  imports: [],
  templateUrl: './departamento-de-lenguas.html',
  styleUrl: './departamento-de-lenguas.scss',
})
export class DepartamentoDeLenguas {

    constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
