import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useReview = (email) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [email, "review"],
    queryFn: async () => {
      const res = await axiosSecure(`/review/getReview/${email}`);

      return res.data;
    },
  });

  return { reviews, isLoading, refetch };
};

export default useReview;
