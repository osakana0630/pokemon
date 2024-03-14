import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { notFound } from "next/navigation";
import { Stats } from "@/constants/stat";

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
    <div className="flex flex-col gap-10 items-center justify-center">
      <div>
        <h2 className="text-4xl text-bold text-center">
          <span className="text-gray-600 mr-2">{pokemon.id}.</span>
          {pokemon.jpName}
        </h2>
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
      </div>

      <div>
        <p>高さ: {pokemon.height}m</p>
        <p>体重: {pokemon.weight}kg</p>
      </div>

      <div className="flex flex-col items-center w-full">
        {pokemon.stats.map((statObj) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <div
              className="flex items-stretch w-full md:w-[500px]"
              key={statName}
            >
              <h3 className="py-3 w-[160px]">
                {Stats[statName]}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>

      <div className="border border-gray-200 dark:border-gray-500 border-x-8 border-x-amber-300 p-4 h-20">
        <p className="text-xl">{pokemon.flavorText}</p>
      </div>
    </div>
  );
}
