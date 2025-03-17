import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fetchPortfolio from "../../utils/uploadPortfolio";

const PortfolioForm = ({ method, prePortfolio = null }) => {
  const [title, setTitle] = useState(
    // 이전 포트폴리오가 있다면 제목을 이전 포트폴리오의 제목으로 설정
    prePortfolio === null ? "" : prePortfolio.title
  );
  const [description, setDescription] = useState(
    prePortfolio === null ? "" : prePortfolio.description
  );

  const { id } = useParams();
  if (prePortfolio !== null && id !== prePortfolio.id) {
    console.error("Url parameter id and pre-portfolio's id are not matching.");
    return;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const portfolioData = { title, description };
    fetchPortfolio(portfolioData, method, id);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="portfolio-title" className="form-label">
          Enter Portfolio Title
        </label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          className="form-control"
          id="portfolio-title"
          placeholder="My Awesome Portfolio"
        />
      </div>
      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="form-control"
            aria-label="Descript your portfolio"
          ></textarea>
        </div>
      </div>
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
  );
};

export default PortfolioForm;
