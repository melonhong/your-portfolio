import React, { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import Login from "../Auth/Login";

const Home = () => {
  const { user, loading } = checkAuth();

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
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;
