import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const fetchPortfolio = async (id) => {
  try {
    const response = await (
      await fetch(`http://localhost:8080/portfolio/detail/${id}`, {
        method: "GET",
      })
    ).json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPortfolio = () => {
  const [portfolio, setPortfolio] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await fetchPortfolio(id);
      console.log(data);
      setPortfolio(data);
    };

    getPortfolio();
  }, [id]);

  return portfolio;
};
