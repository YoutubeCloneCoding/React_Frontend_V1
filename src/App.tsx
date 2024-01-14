import Header from "components/Header";
import React from "react";

function App() {
  const accessToken = new URLSearchParams(window.location.search).get(
    "accessToken",
  );
  const refreshToken = new URLSearchParams(window.location.search).get(
    "refreshToken",
  );

  if (accessToken && refreshToken) {
    localStorage.setItem("access_token", accessToken);
    document.cookie = `refresh_token=${refreshToken}`;
  }

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
