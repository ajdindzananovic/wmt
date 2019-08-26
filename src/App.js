import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import MainRoute from "./_components/mainRoute";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: "/"
    };
  }

  handleChnageLocation = location => {
    this.setState({
      currentLocation: location
    });
  };

  render() {
    return (
      <div className="App container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>React-Bootstrap</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/website">
                <Nav.Link>Web Site</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/task">
                <Nav.Link>Tasks</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/project">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link>SingUp</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <MainRoute />
      </div>
    );
  }
}

export default App;
