import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoriasResponse } from './categorias/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Crear una nueva categoría
  createCategoria(categoria: { nombre: string; subcategorias: string[] }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/categoria`, categoria).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todas las categorías
  getCategorias(): Observable<CategoriasResponse> {
    return this.http.get<CategoriasResponse>(`${this.baseUrl}/categorias`).pipe(
      catchError(this.handleError)
    );
  }

  getSubcategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/subcategorias`).pipe(
      catchError(this.handleError)
    );
  }
  

  // Eliminar una categoría
  eliminarCategoria(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/categoria/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Inactivar una categoría
  inactivateCategoria(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/categoria/inactivar/${id}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la petición HTTP:', error);
    return throwError('Error en la comunicación con el servidor');
  }
}