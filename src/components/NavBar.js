import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
  } from 'react-bootstrap'

export default  ()=>(
    <Navbar xs={12} sm={12}  collapseOnSelect expand="lg" bg="info" >
        <Navbar.Brand href="#home">SGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#cadastrar">Cadastrar</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
)