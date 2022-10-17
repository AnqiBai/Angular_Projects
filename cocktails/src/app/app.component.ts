import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cocktail: CocktailService) { }

  drinks = [];
  search(query: string) {
    // console.log('app: ', query);
    this.cocktail.search(query).subscribe((response: any) => {
      this.drinks = response.drinks;
    });
  }
}
