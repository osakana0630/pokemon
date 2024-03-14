import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}
export async function Pokedex({ searchParams }: SearchParamsProps) {
  const currentPage = Number(searchParams.page ?? 1);
  const pokemonPerPage = 30;
  const offset = (currentPage - 1) * pokemonPerPage;
  const pokemonList = await getPokemonList({ offset, limit: pokemonPerPage });

  return <PokemonGrid pokemonList={pokemonList} searchParams={searchParams} />;
}
