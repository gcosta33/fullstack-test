import React, { useEffect, useState } from 'react';
import { FaTrash,FaCheckCircle,FaRegTimesCircle,FaCheckDouble } from "react-icons/fa";


import Modal from './Modal.js';

import { index,_delete } from '../utils/services.js'
import ToastMensage from '../utils/ToastMensage.js'
import {
  Table,
  Form,
  Button
} from 'react-bootstrap'

export default function Main() {
  //TOAST
  const [showToast, setShowToast] = useState(false)
  const [toastMes, setToastMes] = useState(false)


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
  function handleDeleteCk(){
    if(delectionActive){
      setDelectionList([])
      setDelectionActive(false)
    }else{
      console.log(delectionActive)
      setDelectionActive(true)
    }
  }
  async function handleDelete(id){
    if(id !== undefined){
      console.log(id);
      const delectionList =[id]
      console.log(delectionList)
      const response = await _delete(delectionList)
    }
    const response = await _delete(delectionList)
    if(response === "success"){
      setShowToast(true)
      setToastMes("Exclusão concluida com sucesso")
    }else{
      setShowToast(true)
      setToastMes("Erro ao excluir")
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
          <td style={{textAlign:'center'}}>
            <Modal id={product.id} _method="Editar"></Modal>
          </td>
          <td>{product.id_brand}</td>
          <td>{product.flavor_name}</td>
          <td>{product.size_ref}</td>
          <td>{product.type_ref}</td>
          <td>{product.amout}</td>
          <td>{product.value} R$</td>
          <td style={{textAlign:'center'}}>
            {
              !delectionActive? <Button variant="warning" onClick={()=>handleDelete(product.id)}><FaTrash/></Button> : <Form.Check 
                          onChange={()=>setDelectionList(delectionList=>[...delectionList,product.id])}
                          aria-label="option 1"
                          id={`default-${product.id}`}
                          />
            }</td>
        </tr>
      ))

    }
  }


  return (
    <Table size="sm" responsive striped bordered hover>
      <thead>
        <tr>
          <th style={{textAlign:'center'}}>#</th>
          <th>Nome</th>
          <th>Sabor</th>
          <th>Tamanho</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th style={{textAlign:'center'}}>
            {
              !delectionActive?  <Button variant="link" onClick={()=>handleDeleteCk()}><FaTrash/><FaCheckDouble/></Button>  : <> 
              <Button variant="link" onClick={()=>handleDeleteCk()}><FaRegTimesCircle/></Button>
              <Button variant="link" onClick={()=>handleDelete()}><FaCheckCircle/></Button> </>
            }</th>
        </tr>
      </thead>
      <tbody>
        {
          renderItens()
        }

      </tbody>
      <ToastMensage 
        showToast={showToast} 
        setShow ={setShowToast}
        message={toastMes}
        _method= {"Excluir"}
      />
    </Table>)
}

