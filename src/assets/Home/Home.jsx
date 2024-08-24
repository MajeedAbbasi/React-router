import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Home</h1>
      <p>This is my home page </p>
      <Link to="/about">Go to About</Link>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <button onClick={() => navigate("/filter")}>Go to Filter Page</button>
    </div>
  );
};

export default Home;
