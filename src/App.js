import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Budgeteer from './components/project-budgeteer'
import HeadSpace from './components/project-headspace'
import Adventours from './components/project-adventours'
import Ontogeny from './components/project-ontogeny'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path='/Budgeteer' component={Budgeteer} />
        <Route exact path='/headSpace' component={HeadSpace} />
        <Route exact path='/Scottish AdvenTours' component={Adventours} />
        <Route exact path='/Ontogeny' component={Ontogeny} />
      </Switch>
    </BrowserRouter>
  );
};
