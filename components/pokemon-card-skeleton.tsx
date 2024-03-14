import { Skeleton } from "@/components/ui/skeleton";

export async function PokemonCardSkeleton() {
  return (
    <Skeleton className="rounded-lg px-5 py-4 m-3">
      <div className="m-4 h-[120px] w-[120px]" />
    </Skeleton>
  );
}
