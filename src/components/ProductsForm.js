import React, { useEffect, useState } from 'react';


import { update,create,show } from '../utils/services.js'
import ToastMensage from '../utils/ToastMensage.js'

import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'

export default function Main(props){

    //TOAST
    const [showToast, setShowToast] = useState(false)
    const [toastMes, setToastMes] = useState(false)
  

  const [validated, setValidated] = useState(false);
  const [id,setId] = useState(props?.id);
  const [flavor_name,setFlavor_name] = useState(undefined);
  const [id_brand,setId_brand] = useState(undefined);
  const [type_ref,setType_ref] = useState(0);
  const [size_ref,setSize_ref] = useState(0);
  const [amout,setAmout] = useState();
  const [value,setValue] = useState();

  useEffect(() => {
    async function loadProducts() {
      if(props.id !== undefined){
        let data = await show(props.id)
          console.log(props?._method);
          setFlavor_name(data.flavor_name)
          setId_brand(data.id_brand)
          setType_ref(data.type_ref)
          setSize_ref(data.size_ref)
          setAmout(data.amout)
          setValue(data.value)
      }
      }
    loadProducts()

}, [id])


  async function handleSubmit(event){
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      // event.stopPropagation();
      console.log("a")
    }else{
      event.preventDefault();
      if(id !== undefined && props?._method === "Editar"){
        const res = await update(id,id_brand,
          flavor_name,
          type_ref,
          size_ref,
          amout,
          value)
          console.log(res);
          if(res === "success"){
            setShowToast(true)
            setToastMes("Cadastro concluida com sucesso")
          }else if(res === "Error"){
            setShowToast(true)
            setToastMes("Erro ao atualizar, verifique os dados")
          }  

      }else if(props?._method === "Cadastrar"){
        const res = await create(
          id_brand,
          flavor_name,
          type_ref,
          size_ref,
          amout,
          value)  
          console.log(res);
          if(res === "success"){
            setShowToast(true)
            setToastMes("Cadastro concluida com sucesso")
          }else if(res === "Error"){
            setShowToast(true)
            setToastMes("Erro ao cadastrar, verifique os dados")
          }     
      }else{
        console.log("Fail")
      }
    }

    setValidated(true);
  }

    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        

        <Form.Group as={Row} controlId="formHorizontalBrand">
          <Form.Label column sm={2}>
            Marca
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            value={id_brand}
            onChange={ e=> setId_brand( e.target.value )}
            name="id_brand"
            maxLength="30"
            type="text"
            placeholder="Marca do Produto" />

          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalBrand">
          <Form.Label column sm={2}>
            Sabor
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            value={flavor_name}
            onChange={ e=> setFlavor_name( e.target.value )}
            name="flavor_name"
            maxLength="30"
            type="text"
            placeholder="Nome do Produto" />

          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridState2">
              <Form.Label column sm={2}>Tamanho da Embalagem</Form.Label>
                <Col sm={10}>
                  <Form.Control as="select" required name="size_ref" value={size_ref}
                  onChange={ e=> setSize_ref( e.target.value )}>
                      <option value="0">1 L</option>
                      <option value="1">250 mL</option>
                      <option value="2">600 mL</option>

                  </Form.Control>
                  </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridState3">
              <Form.Label column sm={2}>Tipo da Embalagem</Form.Label>
                <Col sm={10}>
                  <Form.Control as="select" required name="type_ref" value={type_ref}
                  onChange={ e=> setType_ref( e.target.value )}>
                      <option value="0">Lata</option>
                      <option value="1">Pet</option>
                      <option value="2">GarrafaL</option>

                  </Form.Control>
                  </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontavalue">
          <Form.Label column sm={2}>
            Valor
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            required
            value={value}
            onChange={ e=> setValue( e.target.value )}
            name="value"
            type="number"
            placeholder="Valor do Produto" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalsize">
          <Form.Label column sm={2}>
            Quantidade
          </Form.Label>
          <Col sm={10}>
            <Form.Control
            required
            value={amout}
            onChange={ e=> setAmout( e.target.value )}
            name="amout"
            type="number"
            placeholder="Quantidade do Produto em estoque" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 3, offset: 9 }}>
            <Button block type="submit">Salvar</Button>
          </Col>
        </Form.Group>
        <ToastMensage 
        showToast={showToast} 
        setShow ={setShowToast}
        message={toastMes}
        _method= {"Excluir"}
      />
      </Form>
    )

}