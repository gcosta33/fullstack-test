import React, { useEffect, useState } from 'react';
import {} from 'react-icons'

import Modal from './Modal.js';

import { index } from '../utils/services.js'
import {
  Table,
  Form,
  Button
} from 'react-bootstrap'

export default function Main() {
  const [products, setProducts] = useState([])
  const [delectionList, setDelectionList] = useState([])
  const [delectionActive, setDelectionActive] = useState(false)


  useEffect(() => {
    async function loadProducts() {
      let data = await index()
      setProducts(data)
    }
    loadProducts()

  }, [])
  function handleDelete(){
    if(delectionActive){
      console.log(delectionList)
      setDelectionList([])
      setDelectionActive(false)
    }else{
      console.log(delectionActive)
      setDelectionActive(true)
    }
  }
  function renderItens() {
    if (products?.length === 0 || products === undefined) {
      return (
        <tr>
          <td colSpan="8" >
            <span >Loading...</span>

          </td>
        </tr>
      )
    } else {
      return products.map(product => (
        <tr key={product.id}>
          <th >
            <Modal id={product.id} _method="Editar"></Modal>
          </th>
          <th>{product.name}</th>
          <th>{product.flavor_name}</th>
          <th>{product.size_ref}</th>
          <th>{product.type_ref}</th>
          <th>{product.amout}</th>
          <th>{product.value} R$</th>
          <th>
            {
              !delectionActive? <Button variant="warning" onClick={()=>{}}></Button> : <Form.Check 
                          onChange={()=>setDelectionList(delectionList=>[...delectionList,product.id])}
                          aria-label="option 1"
                          id={`default-${product.id}`}
                          />
            }</th>
        </tr>
      ))

    }
  }


  return (
    <Table size="sm" responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Sabor</th>
          <th>Tamanho</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th>
            {
              !delectionActive?  <Button variant="link" onClick={()=>handleDelete()}>Ex</Button>  : <> 
              <Button variant="link" onClick={()=>handleDelete()}>Ex</Button>
              <Button variant="link" onClick={()=>handleDelete()}>Ex</Button> </>
            }</th>
        </tr>
      </thead>
      <tbody>
        {
          renderItens()
        }

      </tbody>
    </Table>)
}

