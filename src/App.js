import React, { Component } from "react";

import "./App.css";

import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Sidebar from "./_components/Sidebar";

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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer
                to="/website"
                onSelect={() => this.handleChnageLocation("/website")}
              >
                <Nav.Link>Web Site</Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/task"
                onSelect={() => this.handleChnageLocation("/task")}
              >
                <Nav.Link>Tasks</Nav.Link>
              </LinkContainer>

              <LinkContainer
                to="/project"
                onSelect={() => this.handleChnageLocation("/project")}
              >
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

        <Sidebar state={this.state} />
      </div>
    );
  }
}

export default App;
