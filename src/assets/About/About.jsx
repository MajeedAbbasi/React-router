import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>This is About</h1>
      <p>This is my about page </p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
