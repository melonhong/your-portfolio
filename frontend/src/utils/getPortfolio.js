import { useState, useEffect } from "react";

export const getPortfolio = (id) => {
  const [portfolio, setportfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8080/portfolio/detail/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setportfolio(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id]);

  return { portfolio, loading, error };
};
