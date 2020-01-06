import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <Router>
      <Route exact path='/' component={MessageBoard} />
    </Router>
  );
}

export default App;
