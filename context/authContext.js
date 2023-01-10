import { createContext, useContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { user: action.payload, isLoading: false };
    case "LOGIN":
      return { user: action.payload, isLoading: false };
    case "LOGOUT":
      return { user: null, isLoading: false };
    case "LOADING":
      return { isLoading: true };
    default:
      return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: true,
  });
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/verifyLogedinUser`;

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser?.token) {
      verifyUser(localUser.token);
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  async function verifyUser(localToken) {
    const data = {
      token: localToken,
    };

    dispatch({ type: "LOADING" });

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resUser = await response.json();

    if (!response.ok) {
      dispatch({ type: "LOGOUT" });
    }

    if (response.ok) {
      dispatch({ type: "LOGIN", payload: resUser });
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
