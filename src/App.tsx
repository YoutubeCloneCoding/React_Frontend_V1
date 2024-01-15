import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Header from "components/Header";
import customAxios from "lib/customAxios";

function App() {
  const accessToken = new URLSearchParams(window.location.search).get(
    "accessToken",
  );
  const refreshToken = new URLSearchParams(window.location.search).get(
    "refreshToken",
  );

  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    window.location.href = "/";
  }

  useEffect(() => {
    customAxios.get("/test/t");
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
