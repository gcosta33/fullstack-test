import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaRegEdit } from "react-icons/fa";

import React from 'react';

import ProductsForm from './ProductsForm'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title {...props} id="contained-modal-title-vcenter">
          {props?._method}
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ProductsForm _method={props?._method} id={props?.id}></ProductsForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props?.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

 export default function App(props) {
    const [modalShow, setModalShow] = React.useState(props.modalShow);
  
    return (
      <>
        <Button variant="none" onClick={() => setModalShow(true)}>
          {
             props?._method === "Editar"? <FaRegEdit/> : props?._method
            }
        </Button>
  
        <MyVerticallyCenteredModal
          _method={props?._method} id={props?.id}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
