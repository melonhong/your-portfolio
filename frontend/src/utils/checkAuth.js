import { useState, useEffect } from "react";

const fetchUserData = async () => {
  // 백엔드에 사용자가 로그인 했는지 확인하는 API 요청 전달
  try {
    const response = await fetch("http://localhost:8080/user", {
      method: "GET",
      credentials: "include",
    });
    return await response.json();
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
        window.location.href = "/login";
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
