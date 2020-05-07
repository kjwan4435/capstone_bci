import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/home";
import experiment from "Routes/experiment";
import questions from "Routes/questions";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/questions" exact component={questions} />
      <Route path="/experiment" exact component={experiment} />
    </>
  </Router>
);
