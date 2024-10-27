import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Crear un nuevo tema (Cambiar la URL a /tema)
  createTema(tema: { nombre: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tema`, tema).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener todos los temas
  getTemas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/temas`).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un tema (Cambiar la URL a /tema/:id)
  eliminarTema(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/tema/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // inactivarTema
  inactivateTema(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/tema/inactivar/${id}`, {}).pipe(
      catchError(this.handleError)
    );
  }
  
  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la petición HTTP:', error);
    return throwError('Error en la comunicación con el servidor');
  }

}