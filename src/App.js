import Contact_Us from "Pages/Contact_Us";
import FAQ from "Pages/FAQ";
import Landing from "Pages/Landing";
import Policy_Privacy from "Pages/Policy_Privacy";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Sections */}
          <Route exact path="/" component={Landing} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact-us" component={Contact_Us} />
          <Route path="/policy-privacy" component={Policy_Privacy} />
        </Switch>
      </div>{" "}
      mkio098•S
    </Router>
  );
}

export default App;
