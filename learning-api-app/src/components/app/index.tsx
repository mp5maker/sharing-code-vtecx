import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from '@learning/utilities/history'
import *  as Routes from '@learning/constants/routes'
import { Home } from '@learning/components/pages/home'

export const App: React.FC<{}> = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact={true} component={Home} path={Routes.HOME.path} />
          <Route exact={true} component={Home} path={Routes.HOME.alternatePath} />
          <Route
            exact={true}
            component={Home}
            path={Routes.HOME.anotherPath}
          />
        </Switch>
      </Router>
    </>
  );
};
