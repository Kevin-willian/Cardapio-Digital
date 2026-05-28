/*dispara requisicoes http*/
import {useQuery} from "@tanstack/react-query";
import axios from "axios"
import type { AxiosPromise } from "axios"
import type { FoodData } from "../interface/FoodData";
const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<FoodData[]> => {
    /*get do backend*/
    const response = axios.get(API_URL + '/food')

    return response;
}

export function useFoodData (){
    const query = useQuery ({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        /*retorna tudo que esta dentro de query
        */
        ...query,
        data: query.data?.data
    }
}