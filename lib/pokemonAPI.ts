import { IPokemon } from "@/types/pokemon";

const POKEMON_API = "https://pokeapi.co/api/v2/";

type GetPokemonListParams = {
  limit: number;
  offset: number;
};
export async function getPokemonList({ limit, offset }: GetPokemonListParams) {
  const response = await fetch(
    `${POKEMON_API}pokemon?limit=${limit}&offset=${offset}`,
  );
  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data.results;
}

export async function getPokemon(name: string): Promise<IPokemon | null> {
  const response = await fetch(`${POKEMON_API}pokemon/${name}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    officialImg: data.sprites?.front_default || "",
    img: data.sprites?.other["official-artwork"]?.front_default || "",
    stats: data.stats,
  };
}

export async function getJapanesePokemonName(name: string) {
  const response = await fetch(`${POKEMON_API}pokemon-species/${name}`);
  const data = await response.json();
  const jpName = data.names.find(
    (nameObj: any) => nameObj.language.name === "ja-Hrkt",
  ).name;

  return jpName || name;
}