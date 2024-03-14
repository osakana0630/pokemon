import { Pokedex } from "@/components/pages/pokedex";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default function PokedexPage({ searchParams }: SearchParamsProps) {
  return <Pokedex searchParams={searchParams} />;
}
