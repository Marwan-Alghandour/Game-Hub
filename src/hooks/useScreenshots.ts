import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Screenshot from "../entities/ScreenShot";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
