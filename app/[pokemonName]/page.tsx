import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { notFound } from "next/navigation";
import { Stats } from "@/constants/stat";
import { Badge } from "@/components/ui/badge";
import { Types } from "@/constants/type";

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

  const basicInfo = [
    { label: "たかさ", value: `${pokemon.height}m` },
    { label: "おもさ", value: `${pokemon.weight}kg` },
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full lg:w-1/2">
      <div>
        <div
          className="m-4 mb-2"
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
          }}
        >
          <PokemonImage image={pokemon.img} name={pokemonName} />
        </div>
        <h2 className="text-4xl text-bold text-center">{pokemon.jpName}</h2>
      </div>

      <div className="flex flex-col items-center w-full lg:w-4/5">
        {pokemon.stats.map((statObj) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <div className="flex justify-center w-full" key={statName}>
              <h3 className="py-2 w-1/4">
                <Badge variant="secondary" className="text-sm lg:text-lg">
                  {Stats[statName]}
                </Badge>
              </h3>
              <Progress className="w-3/4 my-auto" value={statValue} />
            </div>
          );
        })}
        {basicInfo.map(({ label, value }) => (
          <div className="flex justify-center w-full" key={label}>
            <h3 className="py-2 w-1/4">
              <Badge variant="secondary" className="text-sm lg:text-lg">
                {label}
              </Badge>
            </h3>
            <div className="w-3/4 my-auto text-lg">{value}</div>
          </div>
        ))}

        <div className="flex justify-center w-full">
          <h3 className="py-2 w-1/4">
            <Badge variant="secondary" className="text-sm lg:text-lg">
              タイプ
            </Badge>
          </h3>
          <div className="w-3/4 my-auto text-lg">
            {pokemon.types.map((type) => (
              <Badge key={type} variant="outline" className="mr-2">
                {Types[type].name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="border dark:border-gray-500 border-x-8 border-amber-300 p-4 min-h-20 w-full lg:w-4/5">
        {pokemon.flavorText || "特になし"}
      </div>
    </div>
  );
}
