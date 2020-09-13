import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal.js';
import { show } from './utils/services.js'

import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Pagination,
  Form,
  FormControl,
  Button

} from 'react-bootstrap'

import Table from 'react-bootstrap/Table'
import logo from './logo.svg';

function App() {
  return (
    <Container className="mt-1" fluid="sm">
      <Navbar collapseOnSelect expand="lg" bg="primary" >
        <Navbar.Brand href="#home">SGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#cadastrar">Cadastrar</Nav.Link>
            <Nav.Link href="#login">Cadastrar Produto</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Row  >
        <Col xs={12} sm={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td className="justify-content-md-center" colSpan="4">Produtos</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td colSpan="4">

                <Modal></Modal>
                </td>


              </tr>
              <tr>
                <td colSpan="4">

                <Button variant="outline-dark" onClick={
                  ()=>show(9)
                  }>Search</Button>
                </td>


              </tr>
            </tbody>
          </Table>

        </Col>
      </Row>
      <Row className="justify-content-md-center">
        
      <Col md={{ span: 1, offset: 10 }}>
          <Pagination >
                <Pagination.Prev href="#" />
                <Pagination.Item >{12}</Pagination.Item>
                <Pagination.Next  href="#"/>
          </Pagination>
          </Col>

      </Row>

    </Container>


  );
}

export default App;
