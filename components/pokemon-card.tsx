import Link from "next/link";
import { PokemonImage } from "@/components/pokemon-image";
import { getPokemon } from "@/lib/pokemonAPI";

interface PokemonCardProps {
  pokemonName: string;
}
export async function PokemonCard({ pokemonName }: PokemonCardProps) {
  const pokemon = await getPokemon(pokemonName);
  if (pokemon === null) return null;

  return (
    <Link
      href={pokemon.name}
      className="group rounded-lg border border-transparent px-5 py-4 m-3 transition-colors border-gray-200 dark:border-gray-500 hover:border-gray-300"
    >
      <div
        className="m-4"
        style={{
          position: "relative",
          margin: "0 auto",
          width: "120px",
          height: "120px",
        }}
      >
        <PokemonImage image={pokemon.img} name={pokemon.name} />
      </div>
      <h2 className="text-sm md:text-xl font-semibold text-center">
        <span className="text-xs md:text-lg text-gray-600 mr-1">
          {pokemon.id}.
        </span>
        {pokemon.jpName}
      </h2>
    </Link>
  );
}
