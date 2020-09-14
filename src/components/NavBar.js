import React from 'react';
import Modal from './Modal.js';

import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
  } from 'react-bootstrap'

export default function _Navbar(){
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <Navbar collapseOnSelect co expand="lg" bg="info" >
        <Navbar.Brand  href="#home">SGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Modal _method="Cadastrar"></Modal>
            <Modal _method="Login"></Modal>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
)}