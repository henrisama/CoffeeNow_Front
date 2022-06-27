import axios from "axios";  

export const api = axios.create({
    baseURL: 'ec2-18-231-121-38.sa-east-1.compute.amazonaws.com:4000'
});