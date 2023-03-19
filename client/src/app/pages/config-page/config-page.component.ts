import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.scss']
})
export class ConfigPageComponent implements OnInit {

  //Alertas
  ActivarAlertaExito: boolean = false;
  ActivarAlertaError: boolean = false;
  textoMensajeExito: string = "";
  textoMensajeError: string = "";
  //Variables
  tiempoTrabajoConfiguracion: number = 0;
  tiempoDescansoConfiguracion: number = 0;

  constructor(){}

  ngOnInit(): void {
    this.obtenerConfiguracion();
  }

  obtenerConfiguracion() {

  }

  modificarDatos() {}

}
