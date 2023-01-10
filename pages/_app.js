import { AuthContextProvider } from "../context/authContext";
import { FilterContextProvider } from "../context/filterDataContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "react-use-cart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-gilroy">
      <AuthContextProvider>
        <FilterContextProvider>
          <Toaster />
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;
