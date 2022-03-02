import { useEffect, useState } from "react";

const useApiRequest = (req: () => Promise<void>, onMount: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!req || !onMount) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        await req();
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Error) setError(err?.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [onMount]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await req();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) setError(err?.message);
    }

    setIsLoading(false);
  };

  return { error, isLoading, fetchData } as const;
};

export default useApiRequest;
