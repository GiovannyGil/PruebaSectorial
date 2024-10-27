import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Categoria } from './models/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  subcategoriasDisponibles: any[] = [];
  nombre: string = ''; 
  subcategoriasSeleccionadas: string[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarCategorias();
    this.cargarSubcategorias();
  }

  cargarCategorias() {
    this.apiService.getCategorias().subscribe(
      (response) => {
        this.categorias = response.categorias;
      },
      (error) => {
        console.error('Error al cargar las categorías:', error);
      }
    );
  }

  cargarSubcategorias() {
    this.apiService.getSubcategorias().subscribe(
      (data) => {
        this.subcategoriasDisponibles = data;
      },
      (error) => {
        console.error('Error al cargar las subcategorías:', error);
      }
    );
  }

  toggleSubcategoria(event: any) {
    const subcategoriaId = event.target.value;
  
    if (event.target.checked) {
      this.subcategoriasSeleccionadas.push(subcategoriaId);
    } else {
      const index = this.subcategoriasSeleccionadas.indexOf(subcategoriaId);
      if (index > -1) {
        this.subcategoriasSeleccionadas.splice(index, 1);
      }
    }
  
    console.log('Subcategorías seleccionadas:', this.subcategoriasSeleccionadas); // Verificar selección
  }

  agregarCategoria() {
    if (this.nombre.trim() === '' || this.subcategoriasSeleccionadas.length === 0) {
      console.warn('Formulario incompleto.');
      return;
    }
  
    const nuevaCategoria = {
      nombre: this.nombre,
      subcategorias: this.subcategoriasSeleccionadas,
    };
  
    console.log('Datos enviados:', nuevaCategoria); // Verificar los datos antes del envío
  
    this.apiService.createCategoria(nuevaCategoria).subscribe(
      () => {
        console.log('Categoría guardada con éxito.');
        this.nombre = ''; // Limpiar el campo
        this.subcategoriasSeleccionadas = []; // Limpiar la selección
        this.cargarCategorias(); // Recargar la lista
      },
      (error) => {
        console.error('Error al agregar la categoría:', error);
      }
    );
  }

  obtenerNombresSubcategorias(subcategorias: any[]): string {
    return subcategorias.map((s) => s.nombre).join(', ');
  }

  obtenerEstadoTexto(inactivo: boolean): string {
    return inactivo ? 'Inactivo' : 'Activo';
  }

  eliminarCategoria(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.apiService.eliminarCategoria(id).subscribe(
        () => this.cargarCategorias(),
        (error) => console.error('Error al eliminar la categoría:', error)
      );
    }
  }

  inactivarCategoria(id: string) {
    this.apiService.inactivateCategoria(id).subscribe(
      () => this.cargarCategorias(),
      (error) => console.error('Error al inactivar la categoría:', error)
    );
  }
}