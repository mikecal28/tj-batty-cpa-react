import { Switch, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import AboutUs from "./components/pages/AboutUs";
import Clients from "./components/pages/Clients";

function App(props) {
  return (
    <div className="app-container">
      <div className="background-image-container"></div>
      <Route
        path="*"
        {...props}
        render={(routeProps) => <NavBar {...routeProps} />}
      />
      <Switch>
        <Route
          exact
          path="/"
          {...props}
          render={(routeProps) => <AboutUs {...routeProps} />}
        />

        <Route
          exact
          path="/clients"
          {...props}
          render={(routeProps) => <Clients {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
