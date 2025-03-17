import React, { useState, useEffect } from "react";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postPortfolio = async (event) => {
    event.preventDefault();
    try {
      const createdPortfolio = { title, description };
      const data = await (
        await fetch("http://localhost:8080/portfolio/create", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createdPortfolio),
        })
      ).json();

      // 생성 또는 수정한 포트폴리오 디테일로 리다이렉션
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={postPortfolio}>
      <div className="mb-3">
        <label htmlFor="portfolio-title" className="form-label"></label>
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

export default CreateForm;
