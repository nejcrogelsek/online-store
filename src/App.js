import { Navbar, Hero, Qualities, Footer, NotFound404 } from "./components";

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
          <Footer />
        </Route>
        <Route exact path='/404-Not-Found'>
          <Navbar />
          <div className='container'>
            <NotFound404 />
          </div>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
