import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080/foods";

type FoodInput = Omit<FoodData, "id">;

const createFood = async (data: FoodInput): Promise<FoodData> => {
  const response = await axios.post<FoodData>(API_URL, data);
  return response.data;
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
}
