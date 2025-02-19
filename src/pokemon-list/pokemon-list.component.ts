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
      name: 'Treecko',
      num: '252',
      tipo: ['Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png',
      movimientos: ['Destructor', 'Absorber'],
      habilities: ['Espesura']
    },
    {
      name: 'Grovyle',
      num: '253',
      tipo: ['Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png',
      movimientos: ['Megaagotar', 'Corte Furia'],
      habilities: ['Espesura']
    },
    {
      name: 'Sceptile',
      num: '254',
      tipo: ['Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png',
      movimientos: ['Semilladora', 'Planta Feroz'],
      habilities: ['Espesura']
    },
    {
      name: 'Torchic',
      num: '255',
      tipo: ['Fuego'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png',
      movimientos: ['Arañazo', 'Ascuas'],
      habilities: ['Mar llamas']
    },
    {
      name: 'Combusken',
      num: '256',
      tipo: ['Fuego', 'Lucha'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png',
      movimientos: ['Doble patada', 'Nitrocarga'],
      habilities: ['Mar llamas']
    },
    {
      name: 'Blaziken',
      num: '257',
      tipo: ['Fuego', 'Lucha'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png',
      movimientos: ['Patada ígnea', 'Gancho alto'],
      habilities: ['Mar llamas']
    },
    {
      name: 'Mudkip',
      num: '258',
      tipo: ['Agua'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png',
      movimientos: ['Pistola Agua', 'Bofetón Lodo'],
      habilities: ['Torrente']
    },
    {
      name: 'Marshtomp',
      num: '259',
      tipo: ['Agua', 'Tierra'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png',
      movimientos: ['Poder Oculto', 'Surf'],
      habilities: ['Torrente']
    },
    {
      name: 'Swampert',
      num: '260',
      tipo: ['Agua', 'Tierra'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png',
      movimientos: ['Terremoto', 'Hidrobomba'],
      habilities: ['Torrente']
    },
    {
      name: 'Poochyena',
      num: '261',
      tipo: ['Siniestro'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png',
      movimientos: ['Mordisco', 'Gruñido'],
      habilities: ['Fuga', 'Intrépido']
    },
    {
      name: 'Mightyena',
      num: '262',
      tipo: ['Siniestro'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png',
      movimientos: ['Colmillo Ígneo', 'Aullido'],
      habilities: ['Intimidación', 'Intrépido']
    },
    {
      name: 'Zigzagoon',
      num: '263',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png',
      movimientos: ['Placaje', 'Golpe Roca'],
      habilities: ['Recogida', 'Pies Rápidos']
    },
    {
      name: 'Linoone',
      num: '264',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png',
      movimientos: ['Desenrollar', 'Garra Rápida'],
      habilities: ['Recogida', 'Pies Rápidos']
    },
    {
      name: 'Wurmple',
      num: '265',
      tipo: ['Bicho'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png',
      movimientos: ['Picotazo Veneno', 'Cabezazo'],
      habilities: ['Polvo Escudo']
    },
    {
      name: 'Silcoon',
      num: '266',
      tipo: ['Bicho'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png',
      movimientos: ['Fortaleza'],
      habilities: ['Mudar']
    },
    {
      name: 'Beautifly',
      num: '267',
      tipo: ['Bicho', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png',
      movimientos: ['Absorber', 'Tornado'],
      habilities: ['Enjambre']
    },
    {
      name: 'Cascoon',
      num: '268',
      tipo: ['Bicho'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png',
      movimientos: ['Fortaleza'],
      habilities: ['Mudar']
    },
    {
      name: 'Dustox',
      num: '269',
      tipo: ['Bicho', 'Veneno'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png',
      movimientos: ['Confusión', 'Polvo Veneno'],
      habilities: ['Escudo Polvo']
    },
    {
      name: 'Lotad',
      num: '270',
      tipo: ['Agua', 'Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png',
      movimientos: ['Absorber', 'Pistola Agua'],
      habilities: ['Nado Rápido', 'Clorofila']
    },
    {
      name: 'Lombre',
      num: '271',
      tipo: ['Agua', 'Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png',
      movimientos: ['Megaagotar', 'Surf'],
      habilities: ['Nado Rápido', 'Clorofila']
    },
    {
      name: 'Ludicolo',
      num: '272',
      tipo: ['Agua', 'Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png',
      movimientos: ['Danza Lluvia', 'Hidrobomba'],
      habilities: ['Nado Rápido', 'Ritmo Propio']
    },
    {
      name: 'Seedot',
      num: '273',
      tipo: ['Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png',
      movimientos: ['Destructor', 'Absorber'],
      habilities: ['Clorofila', 'Inicio Lento']
    },
    {
      name: 'Nuzleaf',
      num: '274',
      tipo: ['Planta', 'Siniestro'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png',
      movimientos: ['Hoja Afilada', 'Golpe Bajo'],
      habilities: ['Clorofila', 'Inicio Lento']
    },
    {
      name: 'Shiftry',
      num: '275',
      tipo: ['Planta', 'Siniestro'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png',
      movimientos: ['Huracán', 'Desarme'],
      habilities: ['Clorofila', 'Allanamiento']
    },
    {
      name: 'Taillow',
      num: '276',
      tipo: ['Normal', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png',
      movimientos: ['Ataque Rápido', 'Golpe Aéreo'],
      habilities: ['Intrépido', 'Agallas']
    },
    {
      name: 'Swellow',
      num: '277',
      tipo: ['Normal', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png',
      movimientos: ['Ataque Ala', 'Doble Equipo'],
      habilities: ['Intrépido', 'Agallas']
    },
    {
      name: 'Wingull',
      num: '278',
      tipo: ['Agua', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png',
      movimientos: ['Pistola Agua', 'Tornado'],
      habilities: ['Velo Agua', 'Cura Lluvia']
    },
    {
      name: 'Pelipper',
      num: '279',
      tipo: ['Agua', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png',
      movimientos: ['Surf', 'Vendaval'],
      habilities: ['Velo Agua', 'Llovizna']
    },
    {
      name: 'Ralts',
      num: '280',
      tipo: ['Psíquico', 'Hada'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png',
      movimientos: ['Confusión', 'Deslumbrar'],
      habilities: ['Sincronía', 'Rastro']
    },
    {
      name: 'Kirlia',
      num: '281',
      tipo: ['Psíquico', 'Hada'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png',
      movimientos: ['Psicoonda', 'Danza Caos'],
      habilities: ['Sincronía', 'Rastro']
    },
    {
      name: 'Gardevoir',
      num: '282',
      tipo: ['Psíquico', 'Hada'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png',
      movimientos: ['Psíquico', 'Luz Mágica'],
      habilities: ['Sincronía', 'Rastro']
    },
    {
      name: 'Surskit',
      num: '283',
      tipo: ['Bicho', 'Agua'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png',
      movimientos: ['Burbuja', 'Disparo Demora'],
      habilities: ['Humedad', 'Foco Interno']
    },
    {
      name: 'Masquerain',
      num: '284',
      tipo: ['Bicho', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png',
      movimientos: ['Tornado', 'Danza Lluvia'],
      habilities: ['Intimidación']
    },
    {
      name: 'Shroomish',
      num: '285',
      tipo: ['Planta'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png',
      movimientos: ['Megaagotar', 'Paralizador'],
      habilities: ['Efecto Espora', 'Antídoto']
    },
    {
      name: 'Breloom',
      num: '286',
      tipo: ['Planta', 'Lucha'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png',
      movimientos: ['Puño Drenaje', 'Dinamopuno'],
      habilities: ['Efecto Espora', 'Experto']
    },
    {
      name: 'Slakoth',
      num: '287',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png',
      movimientos: ['Golpe Roca', 'Bostezo'],
      habilities: ['Ausente']
    },
    {
      name: 'Vigoroth',
      num: '288',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png',
      movimientos: ['Rasguño', 'Golpe Karate'],
      habilities: ['Espíritu Vital']
    },
    {
      name: 'Slaking',
      num: '289',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png',
      movimientos: ['Holgazanear', 'Hiperrayo'],
      habilities: ['Ausente']
    },
    {
      name: 'Nincada',
      num: '290',
      tipo: ['Bicho', 'Tierra'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png',
      movimientos: ['Arañazo', 'Furia'],
      habilities: ['Mudar']
    },
    {
      name: 'Ninjask',
      num: '291',
      tipo: ['Bicho', 'Volador'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png',
      movimientos: ['Corte Furia', 'Doble Equipo'],
      habilities: ['Impulso']
    },
    {
      name: 'Shedinja',
      num: '292',
      tipo: ['Bicho', 'Fantasma'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png',
      movimientos: ['Garra Umbría', 'Maldición'],
      habilities: ['Superguarda']
    },
    {
      name: 'Whismur',
      num: '293',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png',
      movimientos: ['Destructor', 'Bostezo'],
      habilities: ['Insonorizar']
    },
    {
      name: 'Loudred',
      num: '294',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png',
      movimientos: ['Poder Pasado', 'Rugido'],
      habilities: ['Insonorizar']
    },
    {
      name: 'Exploud',
      num: '295',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png',
      movimientos: ['Hiperrayo', 'Estruendo'],
      habilities: ['Insonorizar']
    },
    {
      name: 'Exploud',
      num: '295',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png',
      movimientos: ['Rugido', 'Golpe Cabeza'],
      habilities: ['Punto Fuerte']
    },
    {
      name: 'Makuhita',
      num: '296',
      tipo: ['Lucha'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png',
      movimientos: ['Ataque Arena', 'Golpe Karate'],
      habilities: ['Agallas']
    },
    {
      name: 'Hariyama',
      num: '297',
      tipo: ['Lucha'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png',
      movimientos: ['Fuerza Bruta', 'Empujón'],
      habilities: ['Agallas']
    },
    {
      name: 'Azurill',
      num: '298',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png',
      movimientos: ['Salpicadura', 'Chapoteo'],
      habilities: ['Gran Encanto']
    },
    {
      name: 'Nosepass',
      num: '299',
      tipo: ['Roca'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png',
      movimientos: ['Placaje', 'Chispazo'],
      habilities: ['Imán']
    },
    {
      name: 'Skitty',
      num: '300',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png',
      movimientos: ['Arañazo', 'Gruñido'],
      habilities: ['Gran Encanto']
    },
    {
      name: 'Delcatty',
      num: '301',
      tipo: ['Normal'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png',
      movimientos: ['Doble Rayo', 'Última Baza'],
      habilities: ['Gran Encanto']
    },
    {
      name: 'Sableye',
      num: '302',
      tipo: ['Siniestro', 'Fantasma'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png',
      movimientos: ['Finta', 'Rayo Confuso'],
      habilities: ['Vista Sombra']
    },
    {
      name: 'Mawile',
      num: '303',
      tipo: ['Acero'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png',
      movimientos: ['Mordisco', 'Danza Espada'],
      habilities: ['Intimidación']
    },
    {
      name: 'Aron',
      num: '304',
      tipo: ['Acero', 'Roca'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png',
      movimientos: ['Placaje', 'Cabeza Hierro'],
      habilities: ['Cabeza Roca']
    },
    {
      name: 'Aggron',
      num: '306',
      tipo: ['Acero', 'Roca'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png',
      movimientos: ['Roca Afilada', 'Enfado'],
      habilities: ['Cabeza Roca', 'Robustez']
    },
    {
      name: 'Meditite',
      num: '307',
      tipo: ['Lucha', 'Psíquico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png',
      movimientos: ['Confusión', 'Puño Incremento'],
      habilities: ['Foco Interno', 'Puro Poder']
    },
    {
      name: 'Medicham',
      num: '308',
      tipo: ['Lucha', 'Psíquico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png',
      movimientos: ['Confusión', 'Puño Incremento'],
      habilities: ['Foco Interno', 'Puro Poder']
    },
    {
      name: 'Electrike',
      num: '309',
      tipo: ['Eléctrico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png',
      movimientos: ['Impactrueno', 'Chispa'],
      habilities: ['Pararrayos', 'Electricidad Estática']
    },
    {
      name: 'Manectric',
      num: '310',
      tipo: ['Eléctrico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png',
      movimientos: ['Impactrueno', 'Rayo'],
      habilities: ['Pararrayos', 'Intimidación']
    },
    {
      name: 'Plusle',
      num: '311',
      tipo: ['Eléctrico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png',
      movimientos: ['Chispa', 'Electrocañón'],
      habilities: ['Más']
    },
    {
      name: 'Minun',
      num: '312',
      tipo: ['Eléctrico'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png',
      movimientos: ['Chispa', 'Electrocañón'],
      habilities: ['Menos']
    },
    {
      name: 'Volbeat',
      num: '313',
      tipo: ['Bicho'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png',
      movimientos: ['Doble Bofetón', 'Rayo'],
      habilities: ['Iluminación', 'Enjambre']
    },
    {
      name: 'Illumise',
      num: '314',
      tipo: ['Bicho'],
      src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png',
      movimientos: ['Doble Bofetón', 'Rayo'],
      habilities: ['Aclimatación', 'Enjambre']
    },
    {
      name: "Roselia",
      num: "315",
      tipo: ["Planta", "Veneno"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png",
      movimientos: ["Drenadoras", "Danza Pétalo"],
      habilities: ["Cura Natural", "Punto Tóxico"]
    },
    {
      name: "Gulpin",
      num: "316",
      tipo: ["Veneno"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png",
      movimientos: ["Bofetón Lodo", "Lanzarrocas"],
      habilities: ["Hedor", "Viscoso"]
    },
    {
      name: "Swalot",
      num: "317",
      tipo: ["Veneno"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png",
      movimientos: ["Bomba Lodo", "Mismodestino"],
      habilities: ["Hedor", "Viscoso"]
    },
    {
      name: "Carvanha",
      num: "318",
      tipo: ["Agua", "Siniestro"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png",
      movimientos: ["Mordisco", "Hidropulso"],
      habilities: ["Mandíbula Fuerte", "Impulso"]
    },
    {
      name: "Sharpedo",
      num: "319",
      tipo: ["Agua", "Siniestro"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png",
      movimientos: ["Triturar", "Cascada"],
      habilities: ["Mandíbula Fuerte", "Impulso"]
    },
    {
      name: "Wailmer",
      num: "320",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png",
      movimientos: ["Salpicadura", "Hidrobomba"],
      habilities: ["Agua Velo", "Indefenso"]
    },
    {
      name: "Wailord",
      num: "321",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png",
      movimientos: ["Surf", "Golpe Cuerpo"],
      habilities: ["Agua Velo", "Indefenso"]
    },
    {
      name: "Numel",
      num: "322",
      tipo: ["Fuego", "Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png",
      movimientos: ["Ascuas", "Magnitud"],
      habilities: ["Despiste", "Ritmo Propio"]
    },
    {
      name: "Camerupt",
      num: "323",
      tipo: ["Fuego", "Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png",
      movimientos: ["Terremoto", "Llamarada"],
      habilities: ["Despiste", "Ritmo Propio"]
    },
    {
      name: "Torkoal",
      num: "324",
      tipo: ["Fuego"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png",
      movimientos: ["Giro Fuego", "Humareda"],
      habilities: ["Humo Blanco", "Sequía"]
    },
    {
      name: "Spoink",
      num: "325",
      tipo: ["Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png",
      movimientos: ["Psicoonda", "Recurrente"],
      habilities: ["Ritmo Propio", "Anticipación"]
    },
    {
      name: "Grumpig",
      num: "326",
      tipo: ["Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png",
      movimientos: ["Onda Certera", "Psíquico"],
      habilities: ["Ritmo Propio", "Anticipación"]
    },
    {
      name: "Sandshrew",
      num: "027",
      tipo: ["Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
      movimientos: ["Excavar", "Arañazo"],
      habilities: ["Velo Arena"]
    },
    {
      name: "Sandslash",
      num: "028",
      tipo: ["Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
      movimientos: ["Garra Metal", "Terremoto"],
      habilities: ["Velo Arena"]
    },
    {
      name: "Spinda",
      num: "327",
      tipo: ["Normal"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png",
      movimientos: ["Hipnosis", "Puño Mareo"],
      habilities: ["Ritmo Propio", "Sebo"]
    },
    {
      name: "Skarmory",
      num: "227",
      tipo: ["Acero", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png",
      movimientos: ["Pico Taladro", "Ala de Acero"],
      habilities: ["Firmeza", "Robustez"]
    },
    {
      name: "Trapinch",
      num: "328",
      tipo: ["Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png",
      movimientos: ["Excavar", "Triturar"],
      habilities: ["Corte Fuerte", "Potencia"]
    },
    {
      name: "Vibrava",
      num: "329",
      tipo: ["Tierra", "Dragón"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png",
      movimientos: ["Bote", "Pulso Dragón"],
      habilities: ["Levitación"]
    },
    {
      name: "Flygon",
      num: "330",
      tipo: ["Tierra", "Dragón"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png",
      movimientos: ["Terremoto", "Garra Dragón"],
      habilities: ["Levitación"]
    },
    {
      name: "Cacnea",
      num: "331",
      tipo: ["Planta"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png",
      movimientos: ["Pin Misil", "Drenadoras"],
      habilities: ["Velo Arena"]
    },
    {
      name: "Cacturne",
      num: "332",
      tipo: ["Planta", "Siniestro"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png",
      movimientos: ["Puño Bala", "Bomba Lodo"],
      habilities: ["Velo Arena"]
    },
    {
      name: "Swablu",
      num: "333",
      tipo: ["Normal", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png",
      movimientos: ["Picotazo", "Canto"],
      habilities: ["Cura Natural"]
    },
    {
      name: "Altaria",
      num: "334",
      tipo: ["Dragón", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png",
      movimientos: ["Ala de Acero", "Pulso Dragón"],
      habilities: ["Cura Natural"]
    },
    {
      name: "Zangoose",
      num: "335",
      tipo: ["Normal"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png",
      movimientos: ["Garra Umbría", "Cuchillada"],
      habilities: ["Inmunidad"]
    },
    {
      name: "Seviper",
      num: "336",
      tipo: ["Veneno"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png",
      movimientos: ["Cola Veneno", "Mordisco"],
      habilities: ["Mudar"]
    },
    {
      name: "Lunatone",
      num: "337",
      tipo: ["Roca", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png",
      movimientos: ["Psíquico", "Rayo Confuso"],
      habilities: ["Levitación"]
    },
    {
      name: "Solrock",
      num: "338",
      tipo: ["Roca", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png",
      movimientos: ["Lanzallamas", "Psíquico"],
      habilities: ["Levitación"]
    },
    {
      name: "Barboach",
      num: "339",
      tipo: ["Agua", "Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png",
      movimientos: ["Hidropulso", "Tierra Viva"],
      habilities: ["Anticipación", "Despiste"]
    },
    {
      name: "Whiscash",
      num: "340",
      tipo: ["Agua", "Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png",
      movimientos: ["Terremoto", "Hidrobomba"],
      habilities: ["Anticipación", "Despiste"]
    },
    {
      name: "Corphish",
      num: "341",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png",
      movimientos: ["Burbuja", "Martillazo"],
      habilities: ["Caparazón", "Adaptabilidad"]
    },
    {
      name: "Crawdaunt",
      num: "342",
      tipo: ["Agua", "Siniestro"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png",
      movimientos: ["Tajo Umbrío", "Martillazo"],
      habilities: ["Caparazón", "Adaptabilidad"]
    },
    {
      name: "Baltoy",
      num: "343",
      tipo: ["Tierra", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png",
      movimientos: ["Confusión", "Poder Pasado"],
      habilities: ["Levitación"]
    },
    {
      name: "Claydol",
      num: "344",
      tipo: ["Tierra", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png",
      movimientos: ["Rayo Carga", "Psíquico"],
      habilities: ["Levitación"]
    },
    {
      name: "Lileep",
      num: "345",
      tipo: ["Roca", "Planta"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png",
      movimientos: ["Ácido", "Energibola"],
      habilities: ["Ventosas"]
    },

    {
      name: "Cradily",
      num: "346",
      tipo: ["Roca", "Planta"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png",
      movimientos: ["Poder Pasado", "Energibola"],
      habilities: ["Ventosas"]
    },
    {
      name: "Anorith",
      num: "347",
      tipo: ["Roca", "Bicho"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png",
      movimientos: ["Corte Furia", "Roca Afilada"],
      habilities: ["Armadura Batalla"]
    },
    {
      name: "Armaldo",
      num: "348",
      tipo: ["Roca", "Bicho"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png",
      movimientos: ["Aguante", "Tijera X"],
      habilities: ["Armadura Batalla"]
    },
    {
      name: "Feebas",
      num: "349",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png",
      movimientos: ["Salpicadura", "Surf"],
      habilities: ["Nado Rápido", "Adaptabilidad"]
    },
    {
      name: "Milotic",
      num: "350",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png",
      movimientos: ["Hidropulso", "Rayo Hielo"],
      habilities: ["Cura Natural", "Compensación"]
    },
    {
      name: "Castform",
      num: "351",
      tipo: ["Normal"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png",
      movimientos: ["Meteorobola", "Rayo"],
      habilities: ["Predicción"]
    },
    {
      name: "Kecleon",
      num: "352",
      tipo: ["Normal"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png",
      movimientos: ["Lengüetazo", "Garra Umbría"],
      habilities: ["Cambio Color"]
    },
    {
      name: "Shuppet",
      num: "353",
      tipo: ["Fantasma"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png",
      movimientos: ["Tinieblas", "Sombra Vil"],
      habilities: ["Insomnio", "Cuerpo Maldito"]
    },
    {
      name: "Banette",
      num: "354",
      tipo: ["Fantasma"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png",
      movimientos: ["Golpe Bajo", "Sombra Vil"],
      habilities: ["Insomnio", "Cuerpo Maldito"]
    },
    {
      name: "Duskull",
      num: "355",
      tipo: ["Fantasma"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png",
      movimientos: ["Tinieblas", "Fuego Fatuo"],
      habilities: ["Levitación", "Insonorizar"]
    },
    {
      name: "Dusclops",
      num: "356",
      tipo: ["Fantasma"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png",
      movimientos: ["Puño Fuego", "Golpe Bajo"],
      habilities: ["Presión", "Frisk"]
    },
    {
      name: "Tropius",
      num: "357",
      tipo: ["Planta", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png",
      movimientos: ["Hoja Mágica", "Vendaval"],
      habilities: ["Clorofila", "Cosecha"]
    },
    {
      name: "Chimecho",
      num: "358",
      tipo: ["Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png",
      movimientos: ["Psíquico", "Rayo Confuso"],
      habilities: ["Levitación"]
    },
    {
      name: "Absol",
      num: "359",
      tipo: ["Siniestro"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png",
      movimientos: ["Finta", "Tajo Umbrío"],
      habilities: ["Presagio", "Justiciero"]
    },
    {
      name: "Wynaut",
      num: "360",
      tipo: ["Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png",
      movimientos: ["Salpicadura", "Manto Espejo"],
      habilities: ["Sombra Trampa", "Telepatía"]
    },
    {
      name: "Snorunt",
      num: "361",
      tipo: ["Hielo"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png",
      movimientos: ["Nieve Polvo", "Rayo Hielo"],
      habilities: ["Foco Interno", "Gélido"]
    },
    {
      name: "Glalie",
      num: "362",
      tipo: ["Hielo"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png",
      movimientos: ["Canto Helado", "Alud"],
      habilities: ["Foco Interno", "Gélido"]
    },
    {
      name: "Spheal",
      num: "363",
      tipo: ["Hielo", "Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png",
      movimientos: ["Rodar", "Rayo Aurora"],
      habilities: ["Cuerpo Graso", "Absorbe Agua"]
    },
    {
      name: "Sealeo",
      num: "364",
      tipo: ["Hielo", "Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png",
      movimientos: ["Golpe Cuerpo", "Ventisca"],
      habilities: ["Cuerpo Graso", "Absorbe Agua"]
    },
    {
      name: "Walrein",
      num: "365",
      tipo: ["Hielo", "Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png",
      movimientos: ["Carámbano", "Ventisca"],
      habilities: ["Cuerpo Graso", "Absorbe Agua"]
    },
    {
      name: "Clamperl",
      num: "366",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png",
      movimientos: ["Concha Filo", "Hidropulso"],
      habilities: ["Corte Fuerte"]
    },
    {
      name: "Huntail",
      num: "367",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png",
      movimientos: ["Mordisco", "Cola Dragón"],
      habilities: ["Corte Fuerte"]
    },
    {
      name: "Gorebyss",
      num: "368",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png",
      movimientos: ["Hidropulso", "Psíquico"],
      habilities: ["Corte Fuerte"]
    },
    {
      name: "Relicanth",
      num: "369",
      tipo: ["Agua", "Roca"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png",
      movimientos: ["Cabezazo Zen", "Hidrobomba"],
      habilities: ["Nado Rápido", "Roca Sólida"]
    },
    {
      name: "Luvdisc",
      num: "370",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png",
      movimientos: ["Beso Amoroso", "Acuacola"],
      habilities: ["Nado Rápido"]
    },
    {
      name: "Bagon",
      num: "371",
      tipo: ["Dragón"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png",
      movimientos: ["Garra Dragón", "Cabeza de Hierro"],
      habilities: ["Cabeza Roca"]
    },
    {
      name: "Shelgon",
      num: "372",
      tipo: ["Dragón"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png",
      movimientos: ["Enfado", "Colmillo Ígneo"],
      habilities: ["Cabeza Roca"]
    },
    {
      name: "Salamence",
      num: "373",
      tipo: ["Dragón", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png",
      movimientos: ["Pulso Dragón", "Danza Dragón"],
      habilities: ["Intimidación", "Autoestima"]
    },
    {
      name: "Beldum",
      num: "374",
      tipo: ["Acero", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png",
      movimientos: ["Golpe Cuerpo", "Cabezazo Zen"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Metang",
      num: "375",
      tipo: ["Acero", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png",
      movimientos: ["Puño Bala", "Puño Meteoro"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Metagross",
      num: "376",
      tipo: ["Acero", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
      movimientos: ["Puño Bala", "Terremoto"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Regirock",
      num: "377",
      tipo: ["Roca"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png",
      movimientos: ["Roca Afilada", "Puño Fuego"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Regice",
      num: "378",
      tipo: ["Hielo"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png",
      movimientos: ["Rayo Hielo", "Puño Trueno"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Registeel",
      num: "379",
      tipo: ["Acero"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png",
      movimientos: ["Cañón Flash", "Puño Fuego"],
      habilities: ["Cuerpo Puro"]
    },
    {
      name: "Latias",
      num: "380",
      tipo: ["Dragón", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png",
      movimientos: ["Psíquico", "Pulso Dragón"],
      habilities: ["Levitación"]
    },
    {
      name: "Latios",
      num: "381",
      tipo: ["Dragón", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png",
      movimientos: ["Psíquico", "Pulso Dragón"],
      habilities: ["Levitación"]
    },
    {
      name: "Kyogre",
      num: "382",
      tipo: ["Agua"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
      movimientos: ["Hidrobomba", "Trueno"],
      habilities: ["Llovizna"]
    },
    {
      name: "Groudon",
      num: "383",
      tipo: ["Tierra"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
      movimientos: ["Terremoto", "Rayo Solar"],
      habilities: ["Sequía"]
    },
    {
      name: "Rayquaza",
      num: "384",
      tipo: ["Dragón", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
      movimientos: ["Ascenso Draco", "Vuelo"],
      habilities: ["Bucle Aire"]
    },
    {
      name: "Jirachi",
      num: "385",
      tipo: ["Acero", "Psíquico"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
      movimientos: ["Deseo", "Puño Meteoro"],
      habilities: ["Dicha"]
    },
    {
      name: "Rayquaza",
      num: "384",
      tipo: ["Dragón", "Volador"],
      src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
      movimientos: ["Enfado", "Velocidad Extrema", "Vuelo", "Pulso Dragón"],
      habilities: ["Bucle Aire"]
    }
  ];

  
  public busqueda: string = '';

  buscar(event: any) {
    this.busqueda = event.target.value.toLowerCase()
  }

  get pokeFiltrado() {
    return this.pokemons.filter(poke =>poke.name.toLowerCase().includes(this.busqueda) || poke.num.includes(this.busqueda));
  }

  clickName(frase: string) {
    console.log(frase);
  }
}
