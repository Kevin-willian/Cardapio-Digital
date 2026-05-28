import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:8080/foods";

type FoodInput = Omit<FoodData, "id">;

interface UpdateParams {
  id: number;
  data: FoodInput;
}

const updateFood = async ({ id, data }: UpdateParams): Promise<FoodData> => {
  const response = await axios.put<FoodData>(`${API_URL}/${id}`, data);
  return response.data;
};

export function useFoodDataUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
}
