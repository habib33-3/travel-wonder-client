import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/user/getAllUsers");

      return res.data;
    },
  });

  return { users, isLoading, refetch };
};

export default useUsers;
