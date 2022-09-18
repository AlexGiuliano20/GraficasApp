import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private _http: HttpClient) {}

  usuariosRedesSociales() {
    return this._http.get('http://localhost:3000/grafica');
  }

  usuariosRedesSocialesDonaData() {
    return this.usuariosRedesSociales().pipe(
      delay(1500),
      map((data) => {
        return {
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }],
        };
      })
    );
  }
}
