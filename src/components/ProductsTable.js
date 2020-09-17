import React, { useEffect, useState } from 'react';
import { FaTrash, FaCheckCircle, FaRegTimesCircle, FaCheckDouble } from "react-icons/fa";


import Modal from './Modal.js';

import { index, _delete } from '../utils/services.js'
import ToastMensage from '../utils/ToastMensage.js'
import {
  Table,
  Form,
  Button,
  Spinner
} from 'react-bootstrap'

export default function Main() {
  //TOAST
  const [showToast, setShowToast] = useState(false)
  const [toastMes, setToastMes] = useState(false)


  const [products, setProducts] = useState([])
  const [delectionList, setDelectionList] = useState([])
  const [delectionActive, setDelectionActive] = useState(false)


  useEffect(() => {
    console.log("s")
    loadProducts()
  }, [])

  async function loadProducts() {
    let data = await index()
    setProducts(data)
  }
  function handleDeleteCk() {
    if (delectionActive) {
      setDelectionList([])
      setDelectionActive(false)
    } else {
      console.log(delectionActive)
      setDelectionActive(true)
    }
  }
  async function handleDelete(id = undefined) {
    if (id !== undefined) {
      console.log(id);
      _delete([id])
        .then((resp) => {
          console.log('aqui')
          console.log(resp)

          if (resp?.length !== 0 && resp?.result === "success") {
            // console.log(response)
            loadProducts()
            setShowToast(true)
            setToastMes("Exclusão concluida com sucesso")
          } else {
            setShowToast(true)
            setToastMes("Erro ao excluir")
          }
        })
    } else {
      delectionList.forEach(element => {
        console.log('aqui1 '.element)
        _delete(element).then((resp) => {
          console.log('aqui22')
          console.log(resp)

          if (resp?.length !== 0 && resp?.result === "success") {
            // console.log(response)
            loadProducts()
            setShowToast(true)
            setToastMes("Exclusão concluida com sucesso")
          } else {
            setShowToast(true)
            setToastMes("Erro ao excluir")
          }
          setDelectionList([])
          setDelectionActive(false)
        })
      });

    }
    // console.log(response.data)

  }

  function renderItens() {
    if (products?.length === 0 || products === undefined) {
      return (
        <tr >
          <td style={{ textAlign: 'center', padding: '20px' }} colSpan="8" >
            <Spinner animation="border" variant="dark" />


          </td>
        </tr>
      )
    } else {
      return products.map(product => (
        <tr key={product.id}>
          <td style={{ textAlign: 'center' }}>
            <Modal id={product.id} _method="Editar"></Modal>
          </td>
          <td>{product.id_brand}</td>
          <td>{product.flavor_name}</td>
          <td>{product.size_ref}</td>
          <td>{product.type_ref}</td>
          <td>{product.amout}</td>
          <td>{product.value} R$</td>
          <td style={{ textAlign: 'center' }}>
            {
              !delectionActive ? <Button variant="warning" onClick={() => handleDelete(product.id)}><FaTrash /></Button> : <Form.Check
                onChange={() => setDelectionList(delectionList => [...delectionList, product.id])}
                aria-label="option 1"
                id={`default-${product.id}`}
              />
            }</td>
        </tr>
      ))

    }
  }


  return (
    <>
      <Table size="sm" responsive striped bordered hover>

        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>#</th>
            <th>Nome</th>
            <th>Sabor</th>
            <th>Tamanho</th>
            <th>Tipo</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th style={{ textAlign: 'center' }}>
              {
                !delectionActive ? <Button variant="link" onClick={() => handleDeleteCk()}><FaTrash /><FaCheckDouble /></Button> : <>
                  <Button variant="link" onClick={() => handleDeleteCk()}><FaRegTimesCircle /></Button>
                  <Button variant="link" onClick={() => handleDelete()}><FaCheckCircle /></Button> </>
              }</th>
          </tr>
        </thead>
        <tbody>
          {
            renderItens()
          }

        </tbody>
      </Table>
      <ToastMensage
        showToast={showToast}
        setShow={setShowToast}
        message={toastMes}
        _method={"Excluir"}
      />
    </>
  )
}

