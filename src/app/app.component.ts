import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected titulo = 'Registro de Usuario';
  protected mensaje = "Data Inicial"
  protected registrado = false;
  protected nombre:string = "";
  protected apellido:string = "";


  protected registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario Registrado Con Exito";
  }
}
