import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],
})
export class CrearCitasComponent implements OnInit {
  @Output() CitaCreada = new EventEmitter<any>();
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;

  constructor() {}

  ngOnInit(): void {}

  agregarCita() {
    if (
      this.nombre == '' ||
      this.fecha == '' ||
      this.hora == '' ||
      this.sintomas == ''
    ) {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    //Creamos objeto para enviarselo al padre
    const Cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas,
    };
    this.CitaCreada.emit(Cita);
    this.resetCampos();
  }

  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
