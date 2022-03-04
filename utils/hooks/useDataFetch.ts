import { useEffect, useState } from "react";

const useDataFetch = (req: (() => Promise<void>)[], onMount: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!req || !onMount) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        for (const item of req) {
          await item();
        }
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
      console.log("TESTE");

      console.log(req);

      for (const item of req) {
        await item();
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) setError(err?.message);
    }

    setIsLoading(false);
  };

  return { error, isLoading, fetchData } as const;
};

export default useDataFetch;
