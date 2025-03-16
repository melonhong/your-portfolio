import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";
import Paginator from "../Common/Paginator";

const PortfolioMain = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [totalPage, setTotalPage] = useState();

  const [searchParams] = useSearchParams(); // 쿼리 가져오기
  const page = searchParams.get("page"); // 현재 페이지 번호
  const limit = searchParams.get("limit"); // 페이지 당 불러올 포트폴리오 수

  // 페이징 단위로 포트폴리오를 가져오는 fetch 함수 추가
  useEffect(() => {
    const fetchPortfolios = async () => {
      const data = await (
        await fetch(
          `http://localhost:8080/portfolio/main?page=${page}&limit=${limit}`
        )
      ).json();
      console.log(data);
      setPortfolios(data.portfolios);
      setTotalPage(data.totalPage);
    };
    fetchPortfolios();
  }, []);

  return (
    <div className="">
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
      <Paginator totalPage={totalPage} />
    </div>
  );
};

export default PortfolioMain;
