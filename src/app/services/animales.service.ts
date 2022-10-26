import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animales, Especies } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  private url = environment.apiURL;
  
  constructor(private httpClient:HttpClient) { }

  getA(): Observable<Animales[]>{
    debugger;
    return this.httpClient.get<Animales[]>(`${this.url}animales`)
  }

  getE(): Observable<Especies[]>{
    return this.httpClient.get<Especies[]>(`${this.url}especies`)
  }

  save(animal:Animales):Observable<any>{
    return this.httpClient.post(`${this.url}animales`,animal);
  }

  getById(id:number):Observable<Animales>{
    return this.httpClient.get<Animales>(`${this.url}animales/${id}`);
  }
  
  update(id:number,animal:Animales):Observable<any>{
    return this.httpClient.put<Animales>(`${this.url}animales/${id}`,animal);
  }
  
  delete(id:number):Observable<any>{
    return this.httpClient.delete<Animales>(`${this.url}animales/${id}`);
  }
}
