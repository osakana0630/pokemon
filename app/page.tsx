import { Pokedex } from "@/components/pages/pokedex";
import { Suspense } from "react";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default function PokedexPage({ searchParams }: SearchParamsProps) {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Pokedex searchParams={searchParams} />
    // </Suspense>
  );
}
