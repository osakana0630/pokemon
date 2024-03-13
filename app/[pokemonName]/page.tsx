import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemon = await getPokemon(pokemonName);

  return (
    <>
      <h1 className="text-4xl text-bold  pt-4">{pokemonName}</h1>
      <div
        className="m-4"
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
        }}
      >
        <PokemonImage
          image={pokemon.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h3>weight: {pokemon.weight}kg</h3>
      <div className="flex-col">
        {pokemon.stats.map((statObj: any) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <div
              className="flex items-stretch"
              style={{ width: " 500px" }}
              key={statName}
            >
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
}
