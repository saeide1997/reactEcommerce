import axios from 'axios'
let TOKEN
const BASE_URL = 'http://ecommercedata.up.railway.app/api/'
if(localStorage.length>2 ){ 
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken 
}else{
    TOKEN = ''
}
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})