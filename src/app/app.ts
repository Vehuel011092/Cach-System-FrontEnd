import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropDownMenu } from "./frontApps/drop-down-menu/drop-down-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DropDownMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Cach-System-FrontEnd');

  reload() {
    window.location.reload();
  }

}
