import React, { useState, useEffect } from "react";
import PortfolioForm from "../Common/PortfolioForm";

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
    <>
      <PortfolioForm
        onSubmit={postPortfolio}
        title={null}
        setTitle={setTitle}
        description={null}
        setDescription={setDescription}
      />
    </>
  );
};

export default CreateForm;
