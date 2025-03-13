import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function getMsg() {
      try {
        const json = await (await fetch("http://localhost:8080/")).json(); // 서버에 API를 통해 JSON 데이터 요청
        setMsg(json.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getMsg();
  }, []);

  return <>{loading ? <h1>Loading...</h1> : <h1>{msg}</h1>}</>;
}

export default App;
