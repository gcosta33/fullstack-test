import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal.js';
import { show } from './utils/services.js'
import ProductsForm from './components/ProductsForm.js'
import NavBar from './components/NavBar.js'
import ProductsTable from './components/ProductsTable.js'

import React from 'react';
import {
  Container,
  Row,
  Col,
  Pagination,
  Button

} from 'react-bootstrap'

import Table from 'react-bootstrap/Table'

function App() {
  return (
    <Container className="mt-1" fluid="sm">
      <NavBar></NavBar>
      <Row  >
        <Col xs={12} sm={12}>
          {/* table */}
          <ProductsTable></ProductsTable>
        </Col>
      </Row>
      <Row>
        <Col><Modal></Modal></Col>
        <Col><Button variant="outline-dark" onClick={
                        () => show(9)
                    }>Search</Button></Col>
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
