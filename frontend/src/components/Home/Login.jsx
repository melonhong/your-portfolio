import React, { useEffect, useState } from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google"; // Google OAuth 페이지로 이동
  };

  return (
    <>
      <button onClick={handleLogin}>Log in with Google</button>
    </>
  );
};

export default Login;
