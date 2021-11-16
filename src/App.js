import "./App.css";
import React, { Component } from "react";
import Header from "./Components/header";
import Content from "./Components/content";
import Footer from "./Components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Read from "./Components/read";
import Create from "./Components/create";
import Edit from "./Components/edit";

// extends keyword is inherinted from the component class
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />

          <Switch>
            <Route path="/home" component={Content} exact />
            <Route path="/create" component={Create} exact />
            <Route path="/read" component={Read} exact />
            <Route path={"/edit/:id"} component={Edit}/>
          </Switch>

          {/* Removed for Router installation */}
          {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
