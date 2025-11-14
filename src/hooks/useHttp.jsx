import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null),
    [expanding, setExpanding] = useState(false);
  const getResource = useCallback(
    async (
      url,
      //CORS
      method = "GET",
      body = null,
      headers
      // = { "Content-Type": "application/json" }
    ) => {
      try {
        let res = await fetch(
          url,
          //CORS
          { method, body, headers }
        );
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        const data = await res.json();

        if (data?.data?.results?.length === 0) {
          setError(true);
          throw new Error(`Empty response: no data found at ${url}`);
        }

        return data;
      } catch (e) {
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => setError(null), []);
  return { error, clearError, expanding, setExpanding, getResource };
};

export default useHttp;
