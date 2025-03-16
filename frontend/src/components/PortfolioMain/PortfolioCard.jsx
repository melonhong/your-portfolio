const PortfolioCard = ({ title, description, id }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {/* 포트폴리오 제목 */}
          Card title
        </h5>
        <p className="card-text">
          {/* 포트폴리오 설명 */}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* 포트폴리오 링크 */}
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
