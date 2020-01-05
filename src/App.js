import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MessageBoard from "./components/MessageBoard";
import Navigation from "./components/Navigation";
import Message from "./components/Message";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router>
      <Navigation />
      <br />
      <Route exact path='/' component={MessageBoard} />
    </Router>
  );
}

export default App;
