import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useCategories = () => {
  const axiosPublic = useAxiosPublic();

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages/getCategories");
      return res.data;
    },
  });

  return { categories, isLoading };
};

export default useCategories;
