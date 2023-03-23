import React from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Post from "./components/post";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar /> 
          <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/About" component = {About}/>
          <Route exact path = "/Contact" component = {Contact}/>
          <Route exact path = "/:post_id" component = {Post}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
