import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Crear una nueva subcategoría
  createSub(subcategoria: { nombre: string; temas: string[] }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/subcategoria`, subcategoria).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todos los temas para seleccionar en el formulario
  getTemas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/temas`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todas las subcategorías
  getSubs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/subcategorias`).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar una subcategoría
  eliminarSub(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/subcategoria/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Inactivar una subcategoría
  inactivateSub(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/subcategoria/inactivar/${id}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la petición HTTP:', error);
    return throwError('Error en la comunicación con el servidor');
  }
}
