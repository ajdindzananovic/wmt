import React, { Component } from "react";
import Header from "./_components/_navBar/Header";
import Footer from "./_components/_navBar/Footer";
import Body from "./_components/_navBar/Body";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
