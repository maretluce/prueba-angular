import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { 
    console.log('componente creandose');
  }

  ngOnInit(): void {
    console.log('componente creado');
  }

  nombre = "Lorem ipsum"

  cambiarNombre() {
    this.nombre = "Ipsum Lorem"
  }

  

}
