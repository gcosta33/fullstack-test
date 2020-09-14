import axios from 'axios';
const axiosConfig = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'application/json'
      }
  }
const qs = require('querystring')
const api = axios.create({
    baseURL: 'http://localhost/fullstack-test'
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
export async function _delete(ids){
    async function conetion(id){
        try {
            const response = await api.post(`/products/delete/${id}`,
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
    if(ids.length > 0){
        console.log(ids);
        // conetion(ids)
    }else{
        console.log(ids);
        // ids.map(id =>conetion(id))
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
    id_brand,
    flavor_name,
    type_ref,
    size_ref,
    amout,
    value
) {
    try {
        const requestBody={
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