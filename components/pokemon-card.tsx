import Link from "next/link";
import { PokemonImage } from "@/components/pokemon-image";

interface PokemonCardProps {
  pokemon: any;
}
export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link
      href={pokemon.name}
      className="group rounded-lg border border-transparent px-5 py-4 m-3 transition-colors dark:border-gray-500 hover:border-gray-300"
    >
      <div
        className="m-4"
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
        }}
      >
        <PokemonImage
          image={pokemon.sprites.other["official-artwork"].front_default}
          name={pokemon.name}
        />
      </div>
      <h2 className="text-2xl font-semibold text-center">
        <span className="text-xl text-gray-600 mr-2">No.{pokemon.id}</span>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
    </Link>
  );
}
