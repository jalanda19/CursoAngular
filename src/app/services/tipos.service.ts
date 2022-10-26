import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especies } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  private url = environment.apiURL;
  
  constructor(private httpClient:HttpClient) { }

  getE(): Observable<Especies[]>{
    return this.httpClient.get<Especies[]>(`${this.url}especies`)
  }

  save(animal:Especies):Observable<any>{
    return this.httpClient.post(`${this.url}especies`,animal);
  }

  getById(id:number):Observable<Especies>{
    return this.httpClient.get<Especies>(`${this.url}especies/${id}`);
  }
  
  update(id:number,animal:Especies):Observable<any>{
    return this.httpClient.put<Especies>(`${this.url}especies/${id}`,animal);
  }
  
  delete(id:number):Observable<any>{
    return this.httpClient.delete<Especies>(`${this.url}especies/${id}`);
  }
}
