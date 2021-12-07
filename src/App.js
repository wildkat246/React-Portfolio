import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import About from "./components/";
 import Contact from "./components/contact";
import Resume from "./components/resume";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import project from "./components/project";
import './App.css';
const App = () => {
  return (
<Router>
  <Navbar/>
  <main>
    <Switch>
    <Route path="/about" exact>
      <About/>
    </Route>
     <Route path="./webApps" exact>
      <WebApps/>
    </Route>
     <Route path="/contact" exact>
      <Contact/>
    </Route>
     <Route path="/resume" exact>
      <Resume/>
    </Route>
    <Redirect to="/about" />
    </Switch>
  </main>
  <Footer/>
</Router>
  );
}
export default App;
white_check_mark
eyes
raised_hands