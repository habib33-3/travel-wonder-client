import axios from "axios";
import { useAuth } from "..";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              console.error(err.message);
            });
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
