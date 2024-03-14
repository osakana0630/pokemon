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
  const res = await fetch(`${POKEMON_API}pokemon/${name}`);
  if (!res.ok) return null;
  const data = await res.json();

  // nameだと一部のポケモンで404になるのでidを指定する
  const speciesData = await getPokemonSpecies(data.id);
  const jpName = getJapanesePokemonName(speciesData?.names || []);
  const flavorTextObj = (speciesData?.flavor_text_entries || []).find(
    (entry: any) =>
      entry.language.name === "ja" || entry.language.name === "ja-Hrkt",
  );

  return {
    id: data.id,
    name: data.name,
    jpName: jpName || data.name,
    height: data.height / 10,
    weight: data.weight / 10,
    officialImg: data.sprites?.front_default || "",
    img: data.sprites?.other["official-artwork"]?.front_default || "",
    stats: data.stats,
    flavorText: flavorTextObj?.flavor_text?.replace(/\s+/g, "") || "",
  };
}

export async function getPokemonSpecies(name: string) {
  const res = await fetch(`${POKEMON_API}pokemon-species/${name}`);
  if (!res.ok) return null;
  return await res.json();
}

function getJapanesePokemonName(names: any[]): string {
  const nameObj = names.find(
    (nameObj: any) =>
      nameObj.language.name === "ja-Hrkt" || nameObj.language.name === "ja",
  );

  return nameObj?.name || "";
}
