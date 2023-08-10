import { Component } from '@angular/core';


interface Entrada {
  title: string;
}

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
  protected entradas:Entrada[];

  constructor(){
    this.entradas = [
      {title:"Python cada dia mas presente"},
      {title:"Java presente desde hace 20 decadas"},
      {title:"Java Script el pilar"},
      {title:"Kotlin cada vez mas potente"},
      {title:"donde quedo pascal?"}
    ]
  }


  protected registrarUsuario(){
    this.registrado = true;
    this.mensaje = "Usuario Registrado Con Exito";
  }
}
