import { useEffect, useState } from "react";
import { IPagination, IPaginationResponse } from "../../@types/pagination";

interface Props<T> {
  fetcher: (data: IPagination) => Promise<IPaginationResponse<T>>;
  limit?: number;
  dependeces?: [];
}

export function usePagination<T>({
  fetcher,
  limit = 100,
  dependeces = [],
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleFetcher();
  }, [...dependeces]);

  async function handleFetcher() {
    setLoading(() => true);
    try {
      if (error) setError(() => null);
      const response = await fetcher({ take: limit, skip: limit * page });
      setData(response.data);
      setTotal(response.total);
    } catch (err) {
      const { message } = err as Error;
      setError(message!);
    }
    setLoading(() => false);
  }

  function handleNextPage() {
    if (page * limit < total) return;
    setPage((c) => c + 1);
  }

  function handlePreviousPage() {
    if (page === 0) return;
    setPage((c) => c - 1);
  }

  return {
    data,
    loading,
    page,
    handleNextPage,
    handlePreviousPage,
    total,
  };
}
