import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js'
import ProductsTable from './components/ProductsTable.js'

import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

function App() {
  return (
    <Container className="mt-1" fluid="sm">
      <NavBar></NavBar>
      <Row  >
        <Col >
          {/* table */}
          <ProductsTable></ProductsTable>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
