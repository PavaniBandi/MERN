import { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { ReadBlog } from "./pages/ReadBlog";
import { CreateBlog } from "./pages/CreateBlog";
import { Layout } from "./components/Layout.jsx";

function App() {
  //Landing Page
  //Home Page
  //ReadBlog
  //CreateBlog

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/readblog" element={<ReadBlog />} />
            <Route path="/createblog" element={<CreateBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
