import { getPokemon } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { notFound } from "next/navigation";
import { Stats } from "@/constants/stat";
import { Badge } from "@/components/ui/badge";
import { Types } from "@/constants/type";
import { PokemonDetailBadge } from "@/components/pokemon-detail-badge";
import { PokemonFlavorText } from "@/components/pokemon-flavor-text";

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
            width: "250px",
            height: "250px",
          }}
        >
          <PokemonImage image={pokemon.img} name={pokemonName} />
        </div>
        <h2 className="text-4xl text-bold text-center">{pokemon.jpName}</h2>
      </div>

      <div className="flex flex-col items-center w-full lg:w-4/5">
        {/* ポケモンのステータス */}
        {pokemon.stats.map((statObj) => {
          const statName = statObj.stat.name;
          const statValue = statObj.base_stat;
          return (
            <PokemonDetailBadge label={Stats[statName]} key={statName}>
              <Progress value={statValue} />
            </PokemonDetailBadge>
          );
        })}

        {/* ポケモンのたかさ、おもさ */}
        {basicInfo.map(({ label, value }) => (
          <PokemonDetailBadge label={label} key={label}>
            {value}
          </PokemonDetailBadge>
        ))}

        {/* ポケモンのタイプ */}
        <PokemonDetailBadge label="タイプ">
          {pokemon.types.map((type) => (
            <Badge key={type} variant="outline" className="mr-2">
              {Types[type].name}
            </Badge>
          ))}
        </PokemonDetailBadge>
      </div>

      {/* ポケモンのフレーバーテキスト */}
      <PokemonFlavorText flavorText={pokemon.flavorText} />
    </div>
  );
}
