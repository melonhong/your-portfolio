import { useState, useEffect } from "react";

const fetchUserData = async () => {
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

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchUserData();
      if (data) setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
};
