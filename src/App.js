import './Home.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faSpinner, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Home from './pages/home';
import Page from './pages/page';
import Info from './pages/info';


library.add(faArrowLeft);
library.add(faAngleRight);
library.add(faSpinner);

function App() {
  return (
      <Router>
          <div className="container p-4">
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/page/:num" component={Page} />
                  <Route exact path="/info/:id" component={Info} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
