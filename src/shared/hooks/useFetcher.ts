import { useEffect, useState } from "react";

interface Props<T> {
  fetcher: () => Promise<T[]>;
  limit?: number;
  dependeces?: [];
}

export function useFetcher<T>({
  fetcher,
  limit = 100,
  dependeces = [],
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleFetcher();
  }, dependeces);

  async function handleFetcher() {
    setLoading(() => true);
    try {
      if (error) setError(() => null);
      const response = await fetcher();
      setData(response);
    } catch (err) {
      const { message } = err as Error;
      setError(message!);
    }
    setLoading(() => false);
  }

  function addItemToList(item: T) {
    const clonedData = [...data];
    if (data.length + 1 > limit) {
      clonedData.pop();
      clonedData.unshift(item);
      setData(clonedData);
      return;
    }
    clonedData.unshift(item);
    setData(clonedData);
  }

  return {
    data,
    loading,
    addItemToList,
  };
}
