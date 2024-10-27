// src/app/modules/subcategorias/subcategorias.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {
  subcategorias: any[] = []; // Lista de subcategorías
  temas: any[] = []; // Lista de temas disponibles
  nombre: string = ''; // Modelo para el formulario
  temasSeleccionados: string[] = []; // IDs de temas seleccionados

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarSubcategorias();
    this.cargarTemas();
  }

  cargarSubcategorias() {
    this.apiService.getSubs().subscribe(
      (data) => {
        this.subcategorias = data;
      },
      (error) => {
        console.error('Error al cargar las subcategorías:', error);
      }
    );
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

  toggleTema(event: any) {
    const temaId = event.target.value;

    if (event.target.checked) {
      this.temasSeleccionados.push(temaId);
    } else {
      const index = this.temasSeleccionados.indexOf(temaId);
      if (index > -1) {
        this.temasSeleccionados.splice(index, 1);
      }
    }

    console.log('Temas seleccionados:', this.temasSeleccionados);
  }

  agregarSubcategoria() {
    if (this.nombre.trim() === '' || this.temasSeleccionados.length === 0) return;

    const nuevaSubcategoria = {
      nombre: this.nombre,
      temas: this.temasSeleccionados,
    };

    this.apiService.createSub(nuevaSubcategoria).subscribe(
      () => {
        this.nombre = ''; // Limpiar el campo
        this.temasSeleccionados = []; // Limpiar la selección
        this.cargarSubcategorias(); // Recargar lista
      },
      (error) => {
        console.error('Error al agregar la subcategoría:', error);
      }
    );
  }

  inactivarSubcategoria(id: string) {
    this.apiService.inactivateSub(id).subscribe(
      () => this.cargarSubcategorias(),
      (error) => console.error('Error al inactivar la subcategoría:', error)
    );
  }

  eliminarSubcategoria(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta subcategoría?')) {
      this.apiService.eliminarSub(id).subscribe(
        () => this.cargarSubcategorias(),
        (error) => console.error('Error al eliminar la subcategoría:', error)
      );
    }
  }

  obtenerNombresTemas(temas: any[]): string {
    return temas.map((t) => t.nombre).join(', ');
  }
}