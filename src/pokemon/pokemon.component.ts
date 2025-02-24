import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [UpperCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  private router = inject(ActivatedRoute);
  private pokemonService = inject(PokemonServiceService);
  private routerNav = inject(Router);

  pokemon?:any;
  pokemonName: string | null = null;

  constructor() {
    this.pokemonName = this.router.snapshot.params['pokemonId'];
    this.getPokemonDetail(this.pokemonName);
  }

  volver() {
    this.routerNav.navigate(['/pokemon-list']);
  }

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

  getPokemonDetail(pokemonId: string | null): void {
    if (pokemonId) {
      this.pokemonService.getPokemonDetail(pokemonId).subscribe((data) => {
        this.pokemon = data;
      });
    }
  }

  getColorTipo(tipo: string): string {
    const colores: { [key: string]: string } = {
      normal: 'lightgrey',
      fire: '#ce3b3b',
      water: 'rgb(122, 185, 221)',
      electric: 'rgb(247, 247, 87)',
      grass: 'rgb(123, 190, 123)',
      ice: '#00ffff',
      fighting: 'maroon',
      poison: 'purple',
      ground: 'rgb(170, 83, 49)',
      flying: 'lightblue',
      psychic: '#da2778',
      bug: 'rgb(181, 187, 99)',
      rock: 'burlywood',
      ghost: 'rgb(116, 55, 146)',
      dragon: 'rgb(71, 71, 124)',
      dark: 'rgb(107, 107, 107)',
      steel: 'silver',
      fairy: 'lightpink',
    };

    return colores[tipo.toLowerCase()] || 'lightgrey';
  }

  getStatColor(index: number): string {
    const colores = ['#ffb3b3', '#ffe0a3', '#b7e4a8', '#a3d2ff', '#cdb4db', '#ffb3d9'];
    return colores[index % colores.length];
  }
  
  traducirStat(stat: string): string {
    const traducciones: {[key: string]: string } = {
      'hp': 'PS',
      'attack': 'ATAQUE',
      'defense': 'DEFENSA',
      'special-attack': 'ATAQUE ESPECIAL',
      'special-defense': 'DEFENSA ESPECIAL',
      'speed': 'VELOCIDAD'
    };
    return traducciones[stat.toLowerCase()] || stat;
  }
  
  
  
}