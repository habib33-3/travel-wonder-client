import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useBlogs = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blog/getBlogs");

      return res.data;
    },
  });

  return { blogs, isLoading, refetch };
};

export default useBlogs;
