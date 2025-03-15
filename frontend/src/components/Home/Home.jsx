import React, { useEffect, useState } from "react";
import Login from "./Login.jsx";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await (
          await fetch("http://localhost:8080/user", {
            method: "GET",
            credentials: "include", // ✅ 쿠키 포함!
          })
        ).json();

        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <p>Email: {user.email}</p>
          <a href="http://localhost:8080/auth/logout">Logout</a>
        </div>
      ) : (
        <div>
          <h1>Please login</h1>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;
