import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { toast } from "react-hot-toast";

export const useAuthHooks = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const SIGNUP_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/register`;
  const LOGIN_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/login`;
  const EDIT_PROFILE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/updateProfile`;

  const signup = async (userData) => {
    setLoading(true);
    setError(null);

    const response = await fetch(SIGNUP_URL, {
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
      dispatch({ type: "REGISTER", payload: resUser });

      setLoading(false);

      toast.success("Account created sucessuflly");
    }
  };

  const login = async (userData) => {
    setLoading(true);
    setError(null);

    const response = await fetch(LOGIN_URL, {
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

  const profileEdit = async (userData) => {
    setLoading(true);
    setError(null);

    const response = await fetch(EDIT_PROFILE_URL, {
      method: "PUT",
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

      setLoading(false);

      toast.success("Profile edit sucessfully");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    toast.success("Logout sucessfully");
  };

  return { signup, login, profileEdit, logout, error, isLoading };
};
