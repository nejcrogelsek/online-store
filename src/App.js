import {
  Navbar,
  Hero,
  Qualities,
  Footer,
  NotFound404,
  ManufacturersHomePage,
  SubscribeModal,
  InstagramEmbed,
  ProductsSection,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <div className='container'>
            <Hero />
            <Qualities />
            <ProductsSection />
            <InstagramEmbed />
            <ProductsSection />
            <ManufacturersHomePage />
          </div>
          <Footer />
          {showModal ? (
            <SubscribeModal showModal={showModal} setShowModal={setShowModal} />
          ) : null}
        </Route>
        <Route exact path='/404-Not-Found'>
          <Navbar />
          <div className='container'>
            <NotFound404 />
          </div>
          <Footer />
        </Route>
        <Route path='*'>
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
