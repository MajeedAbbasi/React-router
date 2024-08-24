import React from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./assets/Home/Home";
import About from "./assets/About/About";
import Navbar from "./Navbar";
import Page404 from "./Page404";
import User from "./User";
import Filter from "./Filter";
import Contact from "./Contact";
import Company from "./Company";
import Other from "./Other";
import Business from "./Business";
import Login from "./Login";
import Protected from "./Protected";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="other" element={<Other />} />
            <Route path="business" element={<Business />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
