import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { TenantProfile } from "./Components/Tenant/TenantProfile";
import { NavBar } from "./Components/Navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Fix It</h1>
        </header>
        <p className="App-intro">
          <NavBar />
        </p>
        <div>
          <TenantProfile />
        </div>
      </div>
    );
  }
}

export default App;
