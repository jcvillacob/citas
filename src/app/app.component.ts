import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCita(Cita: any) {
    this.listCitas.push(Cita);
  }
}
