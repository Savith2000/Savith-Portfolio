import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Program from "./pages/Program/Program";
import FormSite from "./pages/Register/FormSite";
import Contest from "./pages/Contest/Contest"
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Helmet>
        {/* HTML Meta Tags  */}
        <title>Tekjump - Learn, Build, Succeed</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Tekjump - Learn, Build, Succeed</title>
        <meta
          name="description"
          content="Tekjump offers expert web development training and professional experience through our graduate development team."
        />

        {/* Google / Search Engine Tags  */}
        <meta itemprop="name" content="Tekjump" />
        <meta
          itemprop="description"
          content="Tekjump offers expert web development training and professional experience through our graduate development team."
        />
        <meta
          itemprop="image"
          content="https://tekjumpbucket.s3.amazonaws.com/tj_SEO.JPG"
        />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://www.tekjump.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tekjump - Learn, Build, Succeed" />
        <meta
          property="og:description"
          content="Tekjump offers expert web development training and professional experience through our graduate development team."
        />
        <meta
          property="og:image"
          content="https://tekjumpbucket.s3.amazonaws.com/tj_SEO.JPG"
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tekjump - Learn, Build, Succeed" />
        <meta
          name="twitter:description"
          content="Tekjump offers expert web development training and professional experience through our graduate development team."
        />
        <meta
          name="twitter:image"
          content="https://tekjumpbucket.s3.amazonaws.com/tj_SEO.JPG"
        />
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen relative ">
          <div className="fixed min-h-screen min-w-full bg-gray-800 oxerflow-x-hidden -z-1"></div>
          <NavBar />
          <div>
            <Switch>
            <Route path="/contest">
                <Contest />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/program">
                <Program />
              </Route>
              <Route path="/register">
                <FormSite />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
