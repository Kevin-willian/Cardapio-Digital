/*dispara requisicoes http*/
import axios from "axios"
const API_URL = 'https://localhost:8080'

const fetchData = async (): => {
    /*get do backend*/
    const response = axios.get(API_URL + '/food')

    return response;
}

export function useFoodData (){

}