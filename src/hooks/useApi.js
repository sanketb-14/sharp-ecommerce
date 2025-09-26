import { useEffect, useState, useRef } from "react";

function useApiWithRetry(api, intervalMs = 5000) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const intervalId = useRef(null);

  const cancelRetry = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    setIsRetrying(false);
    setError("Retry cancelled by user");
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();

        if (isMounted) {
          setData(json);
          setIsLoading(false);
          setError(null);
          setIsRetrying(false);
       
          if (intervalId.current) clearInterval(intervalId.current);
        }
      } catch (err) {
        if (isMounted) {
          setIsLoading(false);
          setError("Something went wrong ....Retrying");
          setIsRetrying(true);
        }
      }
    };

    
    fetchData();

    // keep retrying every 5 seconds
    intervalId.current = setInterval(fetchData, intervalMs);

    // cleanup on unmount
    return () => {
      isMounted = false;
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [api, intervalMs]);

  return { data, isLoading, error, isRetrying, cancelRetry };
}

export default useApiWithRetry;
