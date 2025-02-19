import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokeapi-ng';
}
