import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  // Brands
  const [selectedBrand, setSelectedBrand] = useState("zara");
  // Categories
  const [selectedMainCategory, setSelectedMainCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Sorts
  const [selectedSort, setSelectedSort] = useState(1);
  const [sortType, setSortType] = useState("price");

  // Page index
  const [currentPage, setCurrentPage] = useState(0);

  // ---------------- Data -------
  const [mainCategory, setMainCategory] = useState(null);
  const [categories, setCategories] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [sizes, setSizes] = useState(null);

  function resetAllFilterValue() {
    setSelectedMainCategory([]);
    setSelectedCategory([]);
    setSelectedSubCategory([]);
    setSelectedSizes([]);
    setCurrentPage(0);
  }

  function resetCurrentPage() {
    setCurrentPage(0);
  }

  return (
    <FilterContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedMainCategory,
        setSelectedMainCategory,
        setSelectedCategory,
        selectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        selectedSizes,
        setSelectedSizes,

        mainCategory,
        setMainCategory,
        categories,
        setCategories,
        subCategory,
        setSubCategory,
        sizes,
        setSizes,

        resetAllFilterValue,
        resetCurrentPage,

        currentPage,
        setCurrentPage,

        sortType,
        setSortType,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
