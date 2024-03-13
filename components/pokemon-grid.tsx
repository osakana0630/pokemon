"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PokemonCard } from "@/components/pokemon-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PokemonGridProps {
  pokemonList: any[];
}
export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const params = useSearchParams();
  const page = Number(params.get("page") ?? 1);
  // const [searchText, setSearchText] = useState("");
  //
  // const searchFilter = (pokemonList: any) => {
  //   return pokemonList.filter((pokemon: any) =>
  //     pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
  //   );
  // };
  //
  // const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      {/*<div>*/}
      {/*  <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>*/}
      {/*  <div className="grid w-full max-w-sm items-center gap-1.5">*/}
      {/*    <Label htmlFor="pokemonName">Pokemon Name</Label>*/}
      {/*    <Input*/}
      {/*      type="text"*/}
      {/*      value={searchText}*/}
      {/*      id="pokemonName"*/}
      {/*      placeholder="Charizard, Pikachu, etc."*/}
      {/*      onChange={(e) => setSearchText(e.target.value)}*/}
      {/*      autoComplete="off"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>*/}
      {/*</div>*/}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        {pokemonList.map((pokemon: any) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name + "Card"} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/?page=${page <= 1 ? 1 : page - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
