import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useGuide = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isGuide, isLoading } = useQuery({
    queryKey: [user?.email, "isGuide"],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/checkGuide/${user?.email}`);

        return res.data.guide;
      } else {
        return null;
      }
    },
  });

  return { isGuide, isLoading };
};

export default useGuide;
