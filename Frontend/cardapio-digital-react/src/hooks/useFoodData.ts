import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080/foods";

const fetchFoods = async (): Promise<FoodData[]> => {
  const response = await axios.get<FoodData[]>(API_URL);
  return response.data;
};

export function useFoodData() {
  return useQuery<FoodData[]>({
    queryKey: ["foods"],
    queryFn: fetchFoods,
  });
}
  