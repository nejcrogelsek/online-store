import { Navbar, Hero, Qualities } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <div className='container'>
            <Hero />
            <Qualities />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
