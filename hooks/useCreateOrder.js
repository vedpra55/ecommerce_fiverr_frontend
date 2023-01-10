import { useState } from "react";
import { toast } from "react-hot-toast";

export const useCreateOrder = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(null);

  const URL = "http://localhost:4000/api/order/createOrder";

  const createOrder = async (userData) => {
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
      setLoading(false);
      toast.success("Order Placed Sucessfully");
      console.log(resUser);
    }
  };

  return { createOrder, error, isLoading };
};
