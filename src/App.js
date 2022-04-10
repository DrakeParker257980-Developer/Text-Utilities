import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Navbar title="Drake Parker" />
    //   <div className="container">
    //     <Routes>
    //       <Route exact path="/About" element={<About />} />
    //       <Route
    //         exact
    //         path="/"
    //         element={<Textform heading="Enter The Text Below To Analyze" />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <Navbar title="Drake Parker" />
      <div className="container">
        <Textform heading="Enter The Text Below To Analyze" />
      </div>
    </>
  );
}

export default App;
