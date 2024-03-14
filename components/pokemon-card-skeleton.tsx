import { Skeleton } from "@/components/ui/skeleton";

export async function PokemonCardSkeleton() {
  return (
    <Skeleton className="rounded-lg px-5 py-4 m-3 transition-colors dark:border-gray-500 hover:border-gray-300w-[270px] h-[300px]">
      <Skeleton className="m-4 h-[200px] w-[200px] rounded-xl" />
    </Skeleton>
  );
}
