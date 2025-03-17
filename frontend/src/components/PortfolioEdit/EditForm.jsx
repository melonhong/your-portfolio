import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "../../utils/getPortfolio";

const EditForm = () => {
  const { id } = useParams();
  const { portfolio, loading, error } = getPortfolio(id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (portfolio) {
      console.log(portfolio);
      setTitle(portfolio.title); // portfolio가 업데이트되면 title 상태를 설정
      setDescription(portfolio.description); // 필요시 description도 설정
    }
  }, [portfolio]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const patchPortfolio = async (event) => {
    try {
      event.preventDefault();
      const editedPortfolio = { id, title, description };
      const data = await (
        await fetch(`http://localhost:8080/portfolio/edit/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedPortfolio),
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
    <form onSubmit={patchPortfolio}>
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

export default EditForm;
