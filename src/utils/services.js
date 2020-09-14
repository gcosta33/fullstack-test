import axios from 'axios';
const axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  }
const qs = require('querystring')
const api = axios.create({
    baseURL: 'http://localhost/teste-unilab'
})

export async function index() {
    try {
        const response = await api.get('/products',
            {
                // data:{
                // "_id": devId}
            }
        )
        if (response) {
            console.log(response.data);
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}
export async function _delete(id){
    try {
        const response = await api.delete(`/products/${id}`,
           {},axiosConfig
        )
        if (response) {
            console.log(response.data);
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}

export async function show(id) {
    try {
        const response = await api.get(`/products/${id}`,
            {
                // params:{
                // }
            }
        )
        if (response) {
            console.log(response.data);
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}
export async function find(
    brand,
    size,
    amout,
    value
) {
    try {
        const response = await api.get(`/products/find`,
            {
                params: {
                    brand,
                    size,
                    amout,
                    value
                }
            }
        )
        if (response) {
            console.log(response.data);
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}

export async function update(
    id,
    name,
    id_brand,
    flavor_name,
    type_ref,
    size_ref,
    amout,
    value
) {
    try {
        const requestBody={
            name,
            id_brand,
            flavor_name,
            type_ref,
            size_ref,
            amout,
            value
        }
        const response = await api.post(`/products/${id}`,
            qs.stringify(requestBody),
            axiosConfig
        )
        if (response) {
            console.log(response.data);
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}
export async function create(
    name,
    id_brand,
    flavor_name,
    type_ref,
    size_ref,
    amout,
    value
) {
    try {
        console.log({
            data: {
                name,
                id_brand,
                flavor_name,
                type_ref,
                size_ref,
                amout,
                value
            }}
        )
        
          const requestBody={
            name,
            id_brand,
            flavor_name,
            type_ref,
            size_ref,
            amout,
            value
          }
        const response = await api.post('/products',
            qs.stringify(requestBody),
            axiosConfig
        )
        if (response) {
            return response.data
        }
    } catch (e) {
        console.log(e.message);
    }
}