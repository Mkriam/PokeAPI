import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = [
    { 
      name: 'Pikachu',
      src: 'https://th.bing.com/th/id/OIP.dvAnwdjqIXDO3ZdgFzMDMQHaHz?rs=1&pid=ImgDetMain',
      habilities:['Onda Trueno','Bola Voltio'] 
    },
    { 
      name: 'Bulbasur', 
      src: 'https://i.pinimg.com/originals/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.png',
      habilities:['Látigo Cepa','Hoja Afilada']  },
    { 
      name: 'Charmander', 
      src: 'https://orig00.deviantart.net/7766/f/2016/290/c/e/vector__578___charmander_by_dashiesparkle-dala92b.png',
      habilities:['Ascuas','Cola Fuego']  
    },
    { 
      name: 'Squirtle', 
      src: 'https://th.bing.com/th/id/OIP.feSPmUDsUQ9fVAWa6WWVuAHaG1?rs=1&pid=ImgDetMain',
      habilities:['Burbuja','Pistola Agua']  }
  ];

  clickName(frase: string) {
    console.log(frase);
  }
}
