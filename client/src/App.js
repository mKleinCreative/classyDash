import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnBoarding from './pages/onboarding';
import NoMatch from "./pages/nomatch";
import theme from 'primereact/resources/themes/darkness/theme.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OnBoarding} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
