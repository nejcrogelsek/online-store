import {
  Navbar,
  Hero,
  Qualities,
  Footer,
  NotFound404,
  ManufacturersHomePage,
  SubscribeModal,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <div className='container'>
            <Hero />
            <ManufacturersHomePage />
            <Qualities />
          </div>
          <Footer />
          <SubscribeModal />
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
