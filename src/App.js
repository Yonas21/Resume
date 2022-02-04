import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import { data } from "./constants/db";

const App = () => {
  const [state, setstate] = useState({
    foo: "bar",
    resumeData: {},
    userData: {},
  });

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    setstate({ resumeData: data });
  }, []);

  return (
    <div className="App">
      <Header data={state.resumeData.main} />
      <About data={state.resumeData.main} />
      <Resume data={state.resumeData.resume} />
      <Portfolio data={state.resumeData.portfolio} />
      <Contact data={state.resumeData.main} />
      <Footer data={state.resumeData.main} />
    </div>
  );
};

export default App;
