import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Modules/temas/api.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  temas: any[] = [];
  nombre: string = ''; // Modelo para el formulario

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarTemas();
    console.log('TemasComponent cargado');
  }

  cargarTemas() {
    this.apiService.getTemas().subscribe(
      (data) => {
        this.temas = data;
      },
      (error) => {
        console.error('Error al cargar los temas:', error);
      }
    );
  }

  agregarTema() {
    if (this.nombre.trim() === '') return;

    this.apiService.createTema({ nombre: this.nombre }).subscribe(
      (response) => {
        this.nombre = ''; // Limpiar el input después de agregar
        this.cargarTemas(); // Recargar la lista
      },
      (error) => {
        console.error('Error al agregar el tema:', error);
      }
    );
  }

  eliminarTema(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este tema?')) {
      this.apiService.eliminarTema(id).subscribe(
        () => this.cargarTemas(),
        (error) => console.error('Error al eliminar el tema:', error)
      );
    }
  }

  inactivarTema(id: string) {
    this.apiService.inactivateTema(id).subscribe(
      () => this.cargarTemas(),
      (error) => console.error('Error al inactivar el tema:', error)
    );
  }
}