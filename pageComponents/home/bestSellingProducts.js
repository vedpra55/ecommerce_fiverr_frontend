import React from "react";
import useSwr from "swr";
import { fetchBestSellingProduct } from "../../services/productDataAPI";
import ProductContainer from "../../components/productContainer/productContainer";

export default function BestSellingProducts({ brand }) {
  const { data } = useSwr([brand], (brand) => fetchBestSellingProduct(brand));

  if (!data) {
    return (
      <div className="myContainer mt-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="myContainer mt-10">
      <ProductContainer
        brand={brand}
        products={data.data}
        title={`${brand} Best Seller`}
      />
    </main>
  );
}
