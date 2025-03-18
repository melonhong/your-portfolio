import { useState, useEffect } from "react";

const fetchUserData = async () => {
  // 백엔드에 사용자가 로그인 했는지 확인하는 API 요청 전달
  try {
    const response = await (
      await fetch(`http://localhost:8080/auth/check`, {
        method: "GET",
        credentials: "include",
      })
    ).json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const checkAuth = () => {
  // 사용자가 로그인 했다면 user, loading을 반환하고, 아니라면 로그인 페이지로 리다이렉션
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUserData();
      setLoading(false);
      if (data) {
        setUser(data);
      } else {
        // 사용자가 로그인하지 않았다면, 로그인 후 현재 페이지를 재방문하기 위해 현재 페이지 저장
        // 현재 페이지는 Redirect 컴포넌트에서 리다이렉트 될 것임
        sessionStorage.setItem("previousUrl", window.location.href);
        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
