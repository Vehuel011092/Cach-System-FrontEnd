<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropDownMenu } from "./frontApps/drop-down-menu/drop-down-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropDownMenu],
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
>>>>>>> 0acc1b9450738ec767cdd83905651d47da3f6f8f
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('Cach-System-FrontEnd');

  reload() {
    window.location.reload();
  }

=======
  protected readonly currentYear = new Date().getFullYear();
>>>>>>> 0acc1b9450738ec767cdd83905651d47da3f6f8f
}
