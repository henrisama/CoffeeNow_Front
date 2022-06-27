import axios from "axios";  

export const api = axios.create({
    baseURL: 'http://ec2-18-228-228-97.sa-east-1.compute.amazonaws.com:4000'
});