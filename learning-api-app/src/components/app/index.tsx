import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "@learning/utilities/history";
import * as Routes from "@learning/constants/routes";
import { Home } from "@learning/components/pages/Home";

export const App: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route
            exact={true}
            path={Routes.HOME.alternatePath}
            component={Home}
          />
          <Route exact={true} path={Routes.HOME.path} component={Home} />
          <Route exact={true} path={Routes.HOME.anotherPath} component={Home} />
        </Switch>
      </Router>
    </>
  );
};
