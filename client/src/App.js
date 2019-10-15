import React from "react";
import Signup from "./components/Pages/Signup";
import Signin from "./components/Pages/Signin";
import Message from "./components/Pages/Message";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Message" component={Message} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
