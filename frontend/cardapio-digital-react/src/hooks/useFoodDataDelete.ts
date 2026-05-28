import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080/foods";

const deleteFood = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export function useFoodDataDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
}
