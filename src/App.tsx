import { useState } from "react";

import "./App.css";
import OneAuth from "oneauth-sdk-core";
import { Security, LoginCallback } from "oneauth-sdk-react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  const oneAuth = new OneAuth({
    issuer: `kang.oneauth.cn/oauth/v1`,
    clientId: `2YXXZ78611K0c8906MX6RJ8c0s84VcQB`,
    redirectUri: `http://localhost:3000/callback`,
    scopes: ["openid", "profile", "email"],
  });
  const login = () => oneAuth.login();
  return (
    <div className="App">
      <Security oneAuth={oneAuth}>
        <button onClick={login}>Login</button>
        <br />
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/callback" element={<LoginCallback></LoginCallback>} />
          </Routes>
        </BrowserRouter>
      </Security>
    </div>
  );
}

export default App;
