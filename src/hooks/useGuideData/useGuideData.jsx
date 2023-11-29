import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useGuideData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: guides,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["guides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/guides/getAllGuide");

      return res.data;
    },
  });

  return { guides, isLoading, refetch };
};

export default useGuideData;
