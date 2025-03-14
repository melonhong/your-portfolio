import React, { useEffect, useState } from "react";

const PortfolioForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="portfolio-title" className="form-label">
          Enter Portfolio Title
        </label>
        <input
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
