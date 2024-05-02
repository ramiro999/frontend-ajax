import axios from 'axios';

const adminService = axios.create(
    {baseURL: 'http://localhost:8081'}
)

// Usuarios
export const userLogin = async (body) => {
    const response = await adminService.post(`/api/usuarios/`, body);
    return response;
};

export const registerUser = async (body) => {
    const response = await adminService.post(`/api/usuarios/create`, body);
    return response;
};
export const getAllUser = async ()=> {
    const response = await adminService.get(`/api/usuarios/`);
    return response;
}




// Clientes
export const getAllCustomerAccount = async ()=> {
    const response = await adminService.get(`/api/clientes/`);
    return response;
};

export const getCustomerAccountById = async (id) => {
    const response = await adminService.get(`/api/clientes/${id}`);
    return response;
}

export const deleteCustomerAccount = async (id) => {
    const response = await adminService.delete(`/api/clientes/${id}`);
    return response;
};

export const createAccount = async (accountData) => {
    const response = await adminService.post(`/api/clientes/`, accountData);
    return response;
};

export const updateAccount = async (id, body) => {
    const response = await adminService.put(`/api/clientes/${id}`, body);
    return response;
}

//Proveedores

// method get all customers
export const getAllProvider = async ()=> {
    const response = await adminService.get(`/api/proveedor/`);
    return response;
};

export const getProviderById = async (id) => {
    const response = await adminService.get(`/api/proveedor/${id}`);
    return response;
};

// create customer
export const createProvider = async (body) => {
    const response = await adminService.post(`/api/proveedor/`, body);
    return response;
};

//delete customer
export const deleteProvider = async (id) => {
    const response = await adminService.delete(`/api/proveedor/${id}`);
    return response;
};

//update customer
export const updateProvider = async (id, body) => {
    const response = await adminService.put(`/api/proveedor/${id}`, body);
    return response;
};
     
