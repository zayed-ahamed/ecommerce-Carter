import api from "./api";

export const getProducts=async ()=>{
    const respones =await api.get("/products")
    return respones.data
}
