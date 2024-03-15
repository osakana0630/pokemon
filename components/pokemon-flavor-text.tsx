interface PokemonFlavorTextProps {
  flavorText: string;
}
export function PokemonFlavorText({ flavorText }: PokemonFlavorTextProps) {
  return (
    <div className="border dark:border-gray-500 border-x-8 border-amber-300 p-4 min-h-20 w-full lg:w-4/5">
      {flavorText || "特になし"}
    </div>
  );
}
