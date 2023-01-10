import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { toast } from "react-hot-toast";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const URL = "http://localhost:4000/api/account/login";

  const login = async (userData) => {
    setLoading(true);
    setError(null);

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const resUser = await response.json();
    if (!response.ok) {
      setError(resUser.error);
      setLoading(false);

      toast.error(resUser.error);
    }

    if (response.ok) {
      // save the user in local storage
      localStorage.setItem("user", JSON.stringify(resUser));

      // update auth state
      dispatch({ type: "LOGIN", payload: resUser });

      toast.success("Login Sucessfully");

      setLoading(false);
    }
  };

  return { login, error, isLoading };
};
