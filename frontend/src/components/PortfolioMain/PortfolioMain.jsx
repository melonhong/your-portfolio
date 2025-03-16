const PortfolioMain = () => {
  // 페이징 단위로 포트폴리오를 가져오는 fetch 함수 추가
  return (
    <>
      <h1>View all portfolios!</h1>
      <div className="container">
        <div className="row">
          {/* map으로 PortfolioCard 추가 */}
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
      </div>

      {/* Paginator 추가하고 페이지 목록 개수 전달하기 */}
    </>
  );
};

export default PortfolioMain;
