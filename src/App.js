import React from "react";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "./store";
import { Home } from "./pages/Home";
import Page2 from "./pages/Page2";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <React.Fragment>
          <div>
            <Link to="/">Home</Link>
            <Link to="/page2">Page 2</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </React.Fragment>
      </Router>
    </StoreProvider>
  );
}

export default App;
