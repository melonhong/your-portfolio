// method에 따라 포트폴리오를 POST 하거나 PATCH 하는 훅
const fetchPortfolio = async (portfolioData, method, id = 0) => {
  try {
    const fetchUrl = // fetch를 요청할 url, method가 POST인 경우엔 생성 url로, PATCH인 경우엔 수정 url로 변경
      method === "POST"
        ? "http://localhost:8080/portfolio/create"
        : `http://localhost:8080/portfolio/edit/${id || ""}`;

    // 실제 fetch를 실행하는 부분
    const data = await (
      await fetch(fetchUrl, {
        method: method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portfolioData),
      })
    ).json();

    console.log(data);
    // 생성 또는 수정한 포트폴리오 디테일로 리다이렉션
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchPortfolio;
