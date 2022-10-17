import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  public search(query: string) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: query,
      }
    }).pipe(
    pluck('drinks')
    );
  }

}
