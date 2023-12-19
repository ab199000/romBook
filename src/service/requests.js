import axios from "axios"

const DOMAIN = "http://localhost:5000/"

export async function getProducts(){
    return await axios.get(DOMAIN + "books")
}

export async function getProduct(id){
    return await axios.get(DOMAIN + "books/" + id)
}