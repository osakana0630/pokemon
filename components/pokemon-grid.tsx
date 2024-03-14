import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PokemonCard } from "@/components/pokemon-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PokemonCardSkeleton } from "@/components/pokemon-card-skeleton";

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
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {pokemonList.map((pokemon: any) => (
          <Suspense key={pokemon.name} fallback={<PokemonCardSkeleton />}>
            <PokemonCard
              pokemonName={pokemon.name}
              key={pokemon.name + "Card"}
            />
          </Suspense>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/?page=${page <= 1 ? 1 : page - 1}`}
              prefetch
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/?page=${page + 1}`} prefetch />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
