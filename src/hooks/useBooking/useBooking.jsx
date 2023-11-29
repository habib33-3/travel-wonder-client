import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useBooking = () => {
  const axiosPublic = useAxiosSecure();

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosPublic.get("/booking/getAllBooking");

      return res.data;
    },
  });

  return { bookings, isLoading, refetch };
};

export default useBooking;
