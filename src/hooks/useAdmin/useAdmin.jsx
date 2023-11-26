import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/checkAdmin/${user?.email}`);
  

      return res.data.admin;
    },
  });

  return { isAdmin, isLoading };
};

export default useAdmin;
