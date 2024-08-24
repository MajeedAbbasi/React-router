import React from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1>This is my contact page</h1>
      <Link to="company">Company</Link>
      <Link to="business">Business</Link>
      <Link to="other">Other</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
