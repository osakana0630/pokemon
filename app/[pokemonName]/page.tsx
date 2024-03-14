import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { redirect, notFound } from "next/navigation";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemon = await getPokemon(pokemonName);
  if (pokemon === null) {
    notFound();
  }

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
        <PokemonImage image={pokemon.img} name={pokemonName} />
      </div>
      <h3>weight: {pokemon.weight}kg</h3>
      <div className="flex flex-col items-center w-full">
        {pokemon.stats.map((statObj: any) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <div
              className="flex items-stretch w-full md:w-[500px]"
              key={statName}
            >
              <h3 className="py-3 w-[160px]">
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
