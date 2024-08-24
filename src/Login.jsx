import React from "react";

const Login = () => {
  const loginfun = () => {
    localStorage.setItem("login", true);
  };
  function logout() {
    localStorage.removeItem("login");
    navigate("/login");
  }
  return (
    <div>
      <h1>This is my Login Pge</h1>
      <button onClick={loginfun}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Login;
