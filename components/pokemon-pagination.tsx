import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PokemonPaginationProps {
  page: number;
}
export function PokemonPagination({ page }: PokemonPaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/?page=${page <= 1 ? 1 : page - 1}`}
            className="text-lg"
          />
        </PaginationItem>
        {Array.from({ length: 5 }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href={`/?page=${page + index + 1}`}>
              {page + index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`/?page=${page + 1}`} className="text-lg" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
