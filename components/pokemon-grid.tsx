import { Suspense } from "react";
import { PokemonCard } from "@/components/pokemon-card";
import { PokemonCardSkeleton } from "@/components/pokemon-card-skeleton";
import { PokemonPagination } from "@/components/pokemon-pagination";

interface PokemonGridProps {
  pokemonList: any[];
  searchParams: {
    page: string;
  };
}
export function PokemonGrid({ pokemonList, searchParams }: PokemonGridProps) {
  const page = Number(searchParams.page ?? 1);

  return (
    <>
      <div className="mb-8 grid text-center grid-cols-2 lg:mb-0 md:grid-cols-3 lg:grid-cols-5">
        {pokemonList.map((pokemon: any) => (
          <Suspense key={pokemon.name} fallback={<PokemonCardSkeleton />}>
            <PokemonCard
              pokemonName={pokemon.name}
              key={pokemon.name + "Card"}
            />
          </Suspense>
        ))}
      </div>
      <PokemonPagination page={page} />
    </>
  );
}
