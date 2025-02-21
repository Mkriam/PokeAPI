import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private http = inject(HttpClient);

  getPokemonList(): Observable<any>  { 
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  changePage(url: string): Observable<any>{
    return this.http.get(url);
  }
}
