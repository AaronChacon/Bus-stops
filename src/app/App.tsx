import React from 'react';
//Scss
import '../assets/styles/styles.scss'
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Provider

//
import { Layout } from './layout/Layout';
import { Routes } from './routes/routes';


function App() {
  return (
    <Router basename="/">
      <Layout>
          <Switch>
            {
              Routes.map(({path, component }) => {
                return (
                  <Route exact path={path} key={path}>
                      {component}
                  </Route>
                )
              })
            }
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
