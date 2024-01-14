import Header from "components/Header";
import customAxios from "lib/customAxios";
import React, { useEffect } from "react";

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
    <div>
      <Header />
    </div>
  );
}

export default App;
