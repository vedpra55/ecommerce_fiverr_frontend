export async function fetchBestSellingProduct(brand) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/bestSeller?brand=${brand}`
  );
  return res.json();
}

export async function fetchSingleProduct(arg) {
  const data = {
    id: arg[0],
    brand: arg[1],
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/singleProducts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}

export async function fetchSimilarProducts(arg) {
  const id = arg[0];
  const product = arg[1];
  const data = {
    mainCategory: product.data.productDetails.mainCategories[0],
    category: product.data.productDetails.mainCategories[1],
    subCategory:
      product.data.productBrand === "h&m" &&
      product.data.productDetails.mainCategories[2],
    brand: product.data.productBrand,
    productId: id,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/similarProducts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}
