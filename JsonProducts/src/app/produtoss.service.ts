import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produt } from 'src/produtoss';

@Injectable({
  providedIn: 'root'
})
export class ProdutossService {
  url = "http://localhost:3000/produtos";

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Produt>{
    let url = "http://localhost:3000/produtos";
    return this.http.get<Produt>(url);
  }

  save(Prod : Produt): Observable<Produt>{
    return this.http.post<Produt>(this.url, Prod);
  }

  remove(Prod: Produt): Observable<void> {
    return this.http.delete<void>(`${this.url}/${Prod.id}`);
  }

  update(Prod: Produt): Observable<Produt> {
    return this.http.put<Produt>(`${this.url}/${Prod.id}`,Prod);
  }
}
