import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Contactme from "./Pages/Contactme";
// import Loading from "./Pages/Loading/Loading";1

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="" component={Loading} /> */}
          <Route exact path="/main" component={Main} />
          <Route exact path="/contact" component={Contactme} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
