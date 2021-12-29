import "./App.css";
import OneAuth from "oneauth-sdk-core";
import { Security, LoginCallback, SecurityRoute } from "oneauth-sdk-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { About } from "./about";
function App() {
  const oneAuth = new OneAuth({
    issuer: `kang.oneauth.cn/oauth/v1`,
    clientId: `2YXXZ78611K0c8906MX6RJ8c0s84VcQB`,
    redirectUri: `http://localhost:3000/callback`,
    scopes: ["openid", "profile", "email"],
  });
  const login = () => oneAuth.login();
  return (
    <BrowserRouter>
      <div className="App">
        <Security oneAuth={oneAuth}>
          <button onClick={login}>Login</button>
          <br />
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Route path="/callback">
            <LoginCallback />
          </Route>
          <Route path="/home">
            <h1>Home</h1>
          </Route>
          {/* <Route
            path="/about"
            component={(...props: unknown[]) => <h1>About</h1>}
          ></Route> */}
          <SecurityRoute path="/about">
            <About />
          </SecurityRoute>
        </Security>
      </div>
    </BrowserRouter>
  );
}

export default App;
