import React, { useEffect, useState } from 'react';

import { index } from '../utils/services.js'
import {
    Table
} from 'react-bootstrap'

export default function Main() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            let data = await index()
            setProducts(data)
        }
        loadProducts()

    }, [])
    function renderItens() {
        console.log(products)
      
        if (products?.length == 0 || products == undefined ) {
            return (
                <tr>
                    <td colSpan="7" >

                        <span >Loading...</span>

                    </td>
                </tr>
            )
        } else {
            return products.map(product => (
                <tr key={product.id}>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.flavor_name}</th>
                    <th>{product.size_ref}</th>
                    <th>{product.type_ref}</th>
                    <th>{product.amout}</th>
                    <th>{product.value} R$</th>
                </tr>
            ))

        }
    }


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Sabor</th>
                    <th>Tamanho</th>
                    <th>Tipo</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {
                    renderItens()
                }

            </tbody>
        </Table>)
}

