import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private http = inject(HttpClient);
  private apiUrl = 'https://peticiones.online/api/series';

  // GET: Obtener todas las series
  getAllSeries(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST: Agregar una nueva serie
  addSeries(seriesData: any): Observable<any> {
    return this.http.post(this.apiUrl, seriesData);
  }
}
