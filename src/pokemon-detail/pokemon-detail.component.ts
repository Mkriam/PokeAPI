import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  template: `<p>Detalle de pokemon</p>`,
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  @Input() pokemon: string ='';
  @Input() imagen: string='';
  @Input() num: string='';
  @Input() tipo: Array<string>=[];
  @Input() habilities: Array<string>=[];
  @Input() movimientos: Array<string>=[];
  @Output() clickName= new EventEmitter<string>();

  getColorTipo(): string {
    const tipos = Array.isArray(this.tipo) ? this.tipo : [this.tipo];
  
    const colores: { [key: string]: string } = {
      agua: 'rgb(122, 185, 221)', 
      fuego: '#bb1f1f', 
      planta: 'rgb(123, 190, 123)',
      bicho:'rgb(181, 187, 99)',
      eléctrico: 'rgb(247, 247, 87)',
      psíquico: '#da2778',
      acero:'silver',
      volador:'lightblue',
      roca:'burlywood',
      siniestro:'rgb(107, 107, 107)',
      dragón: 'rgb(71, 71, 124)',
      hielo: '#00ffff',
      lucha: 'maroon', 
      veneno:'purple',
      tierra:'rgb(170, 83, 49)',
      fantasma: 'rgb(116, 55, 146)', 
      hada: 'lightpink', 
      normal: 'lightgrey'
    };
  
    if (this.tipo.length > 1) {
      const gradient = this.tipo.map(ti => colores[ti.toLowerCase()] || colores['normal']);
      return `linear-gradient(65deg, ${gradient.join(', ')})`;
    }
  
    return colores[this.tipo[0].toLowerCase()];
  }
  

 }
