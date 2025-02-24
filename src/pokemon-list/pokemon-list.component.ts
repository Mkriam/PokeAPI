import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonServiceService } from '../pokemon-service.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, PaginatorComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})

export class PokemonListComponent {
  public pokemons: any[] = [];
  private pokemonService = inject(PokemonServiceService);
  private router = inject(Router);
  pages?: any;


  tipoTraducciones: { [key: string]: string } = {
    normal: "Normal",
    fire: "Fuego",
    water: "Agua",
    electric: "Eléctrico",
    grass: "Planta",
    ice: "Hielo",
    fighting: "Lucha",
    poison: "Veneno",
    ground: "Tierra",
    flying: "Volador",
    psychic: "Psíquico",
    bug: "Bicho",
    rock: "Roca",
    ghost: "Fantasma",
    dragon: "Dragón",
    dark: "Siniestro",
    steel: "Acero",
    fairy: "Hada"
  };

  constructor() {
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pages = { next: data.next, previous: data.previous };
      this.pokemons = data.results.map((poke: any) => ({
        name: poke.name,
        id: poke.url.split('/').filter(Boolean).pop(),
        tipos: [],
      }));

      this.pokemons.forEach((pokemon) => {
        this.pokemonService.getPokemonDetail(pokemon.id).subscribe((tipo) => {
          pokemon.tipos = tipo.types.map((type: any) =>
            this.tipoTraducciones[type.type.name] || type.type.name
          );
        });
      });
    });
  }


  nextPage() {
    if (this.pages?.next) {
      this.pokemonService.changePage(this.pages.next).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results.map((poke: any) => ({
          name: poke.name,
          id: poke.url.split('/').filter(Boolean).pop(),
          tipos: [],
        }));

        this.pokemons.forEach((pokemon) => {
          this.pokemonService.getPokemonDetail(pokemon.id).subscribe((tipo) => {
            pokemon.tipos = tipo.types.map((type: any) =>
              this.tipoTraducciones[type.type.name] || type.type.name);
          });
        });
      });
    }
  }

  prevPage() {
    if (this.pages?.previous) {
      this.pokemonService.changePage(this.pages.previous).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results.map((poke: any) => ({
          name: poke.name,
          id: poke.url.split('/').filter(Boolean).pop(),
          tipos: [],
        }));

        this.pokemons.forEach((pokemon) => {
          this.pokemonService.getPokemonDetail(pokemon.id).subscribe((tipo) => {
            pokemon.tipos = tipo.types.map((type: any) =>
              this.tipoTraducciones[type.type.name] || type.type.name);
          });
        });
      });
    }
  }



  public busqueda: string = '';

  buscar(event: any) {
    this.busqueda = event.target.value.toLowerCase()
  }

  get pokeFiltrado() {
    return this.pokemons.filter(poke => poke.name.toLowerCase().includes(this.busqueda) || poke.id.toString().includes(this.busqueda));
  }

  clickName(pokemon: string) {
    this.router.navigate(['/pokemon', pokemon]);
  }
}
