import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    toast.success("Logout sucessfully");
  };
  return { logout };
};
