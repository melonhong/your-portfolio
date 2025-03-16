const PortfolioCard = ({ title, description, id }) => {
  return (
    <div className="card mb-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <a href={`/portfolio/detail/${id}`} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
