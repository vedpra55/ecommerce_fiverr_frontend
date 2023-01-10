export async function fetchMainCategoryData(selectedBrand) {
  const data = {
    brand: selectedBrand,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainCategory`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await res.json();
  return resData;
}

export async function fetchCategoryData(selectedBrand, selectedMainCategory) {
  const data = {
    brand: selectedBrand,
    gender: selectedMainCategory,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
}

export async function fetchSizeData(
  selectedBrand,
  selectedMainCategory,
  selectedCategory,
  selectedSubCategory
) {
  const data = {
    brand: selectedBrand,
    gender: selectedMainCategory,
    category: selectedCategory,
    subCategory: selectedSubCategory.length === 0 ? null : selectedSubCategory,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sizes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
}

export async function fetchSubCategoryHMData(
  selectedMainCategory,
  selectedCategory
) {
  const data = {
    mainCategory: selectedMainCategory,
    category: selectedCategory,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/subCategoryHm`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await res.json();
  return resData;
}
