"use client";

import Image from "next/image";

interface PokemonImageProps {
  name: string;
  image: string;
}
export function PokemonImage({ name, image }: PokemonImageProps) {
  return (
    <Image
      src={image}
      alt={`Picture of ${name}`}
      // Todo 以下のpropsについて調査したい
      priority
      fill
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
      sizes="33vw"
    />
  );
}
