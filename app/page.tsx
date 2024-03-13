import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonList } from "@/lib/pokemonAPI";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const currentPage = Number(searchParams.page ?? 1);
  const sizePerPage = 30;
  const offset = (currentPage - 1) * sizePerPage;

  const pokemonList = await getPokemonList({ offset, limit: sizePerPage });
  return <PokemonGrid pokemonList={pokemonList} />;
}
