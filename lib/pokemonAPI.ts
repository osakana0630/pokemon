const POKEMON_API = "https://pokeapi.co/api/v2/";

type GetPokemonListParams = {
  limit: number;
  offset: number;
};
export async function getPokemonList({ limit, offset }: GetPokemonListParams) {
  const response = await fetch(
    `${POKEMON_API}pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await response.json();

  const result = [];
  for (const pokemon of data.results) {
    const pokemonObj = await getPokemon(pokemon.name);
    result.push({ ...pokemon, ...pokemonObj });
  }

  return result;
}

export async function getPokemon(name: string) {
  const response = await fetch(`${POKEMON_API}pokemon/${name}`);
  return await response.json();
}

export async function getJapanesePokemonName(name: string) {
  const response = await fetch(`${POKEMON_API}pokemon-species/${name}`);
  const data = await response.json();
  const jpName = data.names.find(
    (nameObj: any) => nameObj.language.name === "ja-Hrkt",
  ).name;

  return jpName || name;
}
