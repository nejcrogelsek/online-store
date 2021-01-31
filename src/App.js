import { Navbar, Hero } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
