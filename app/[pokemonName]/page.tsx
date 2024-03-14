import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { notFound } from "next/navigation";
import { Stats } from "@/constants/stat";
import { Badge } from "@/components/ui/badge";

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

      <div className="flex flex-col items-center w-full">
        {pokemon.stats.map((statObj) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <div className="flex  w-full" key={statName}>
              <h3 className="py-2 w-[115px]">
                <Badge variant="secondary">{Stats[statName]}</Badge>
              </h3>
              <Progress className="w-[65%] my-auto" value={statValue} />
            </div>
          );
        })}
        <div className="flex items-stretch w-full">
          <h3 className="py-2 w-[115px]">
            <Badge variant="secondary">たかさ</Badge>
          </h3>
          <div className="my-auto">{pokemon.height}m</div>
        </div>
        <div className="flex items-stretch w-full">
          <h3 className="py-2 w-[115px]">
            <Badge variant="secondary">おもさ</Badge>
          </h3>
          <div className="my-auto">{pokemon.weight}kg</div>
        </div>
      </div>

      <div className="border dark:border-gray-500 border-x-8 border-amber-300 p-4 min-h-20">
        {pokemon.flavorText}
      </div>
    </div>
  );
}
