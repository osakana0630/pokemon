import { Badge } from "@/components/ui/badge";

interface PokemonDetailBadgeProps {
  label: string;
  children: React.ReactNode;
}

export function PokemonDetailBadge({
  label,
  children,
}: PokemonDetailBadgeProps) {
  return (
    <div className="flex justify-center w-full">
      <h3 className="py-2 w-[150px] lg:w-[170px]">
        <Badge variant="secondary" className="text-sm lg:text-lg">
          {label}
        </Badge>
      </h3>
      <div className="px-5 w-full my-auto text-lg">{children}</div>
    </div>
  );
}
