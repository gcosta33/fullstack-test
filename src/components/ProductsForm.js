import React, { useEffect, useState } from 'react';


import { update,create,show } from '../utils/services.js'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'

export default function Main(props){
  const [validated, setValidated] = useState(false);
  const [id,setId] = useState(props?.id);
  const [flavor_name,setFlavor_name] = useState(undefined);
  const [id_brand,setId_brand] = useState(0);
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


  function handleSubmit(event){
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("a")
    }else{
      event.preventDefault();
      if(id !== undefined && props?._method === "Editar"){
        const res = update(id,id_brand,
          flavor_name,
          type_ref,
          size_ref,
          amout,
          value)

      }else if(props?._method === "Cadastrar"){
        const res = create(
          id_brand,
          flavor_name,
          type_ref,
          size_ref,
          amout,
          value)       
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
            Nome
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

        <Form.Group as={Row} controlId="formGridState1">
              <Form.Label column sm={2}>Marcas</Form.Label>
                <Col sm={10}>
                  <Form.Control
                  value={id_brand}
                  onChange={ e=> setId_brand( e.target.value )}
                  as="select" required name="id_brand" >
                      <option value="0">Coca Cola</option>
                      <option value="1">Fanta</option>
                      <option value="3">Pepsi</option>
                      <option value="4">Sprite</option>
                      <option value="5">Sukita</option>
                      <option value="6">Guaraná Antartica</option>

                  </Form.Control>
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
      </Form>
    )

}