import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Work from "./components/work/work.jsx";
import Connect from "./components/connect/connect.jsx";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work />
      <Connect/>
    </>
  );
}
export default App;
