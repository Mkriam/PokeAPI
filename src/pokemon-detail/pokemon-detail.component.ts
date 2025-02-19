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
  @Input() habilities: Array<string>=[];
  @Output() clickName= new EventEmitter<string>();
 }
