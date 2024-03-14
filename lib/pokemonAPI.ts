const POKEMON_API = "https://pokeapi.co/api/v2/";

type GetPokemonListParams = {
  limit: number;
  offset: number;
};
export async function getPokemonList({ limit, offset }: GetPokemonListParams) {
  // 5秒遅延させる
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `${POKEMON_API}pokemon?limit=${limit}&offset=${offset}`,
  );
  const data = await response.json();

  return data.results;

  // const promises = data.results.map(async (pokemon: any) => {
  //   const pokemonObj = await getPokemon(pokemon.name);
  //   console.log(pokemonObj.id);
  //   return { ...pokemon, ...pokemonObj };
  // });

  // return await Promise.all(promises);
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
