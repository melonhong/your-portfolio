import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioMain = () => {
  const [portfolios, setPortfolios] = useState([]);
  // 페이징 단위로 포트폴리오를 가져오는 fetch 함수 추가
  useEffect(() => {
    const fetchPortfolios = async () => {
      const data = await (
        await fetch(`http://localhost:8080/portfolio/list`)
      ).json();
      console.log(data);
      setPortfolios(data);
    };
    fetchPortfolios();
  }, []);
  return (
    <>
      <h1>View all portfolios!</h1>
      <div className="container">
        <div className="row">
          {/* map으로 PortfolioCard 추가 */}
          {portfolios.map((portfolio) => {
            return (
              <div className="col" key={portfolio.id}>
                <PortfolioCard
                  id={portfolio.id}
                  title={portfolio.title}
                  description={portfolio.description}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Paginator 추가하고 페이지 목록 개수 전달하기 */}
    </>
  );
};

export default PortfolioMain;
