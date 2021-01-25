import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
