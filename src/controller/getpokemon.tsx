import { Pokemon } from "../models/pokemon";

export async function getPokemons(): Promise<Pokemon[]> {

    /* Fetching the data from the URL. */
    const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');

    const data = await response.json();
    const pokemons = data.results.map((pokemon:any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        gif: CorregirNombre(pokemon.sprites['animated']),
        large: pokemon.sprites['large'],
        normal: pokemon.sprites['normal'],
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type[0]
    }));

    const unicosPokemons = pokemons.filter(
        (pokemon:any, index:number) =>
        pokemons.findIndex((other:any) => other.id === pokemon.id) === index
    );

    return unicosPokemons;

}

export function CorregirNombre(name: string): string{
    if(name.includes("farfetch'd")){
        return name.replace("farfetch'd","farfetchd");
    }
    else if(name.includes("mr.-mime")){
        return name.replace("mr.-mime","mr-mime");
    }
    else if(name.includes("♂")){
        return name.replace("♂","-m");
    }
    else if(name.includes("♀")){
        return name.replace("♀","-f");
    }
    else{
        return name;
    }
}