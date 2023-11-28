import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useTours = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: tours,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages/getAllPackages");

      return res.data;
    },
  });

  return { tours, isLoading, refetch };
};

export default useTours;
