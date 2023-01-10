import React, { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useFilterContext } from "../../context/filterDataContext";

import {
  fetchSizeData,
  fetchSubCategoryHMData,
} from "../../services/filterDataAPI";

export default function CategoriesOption({ isToggle, setToggle }) {
  const {
    categories,
    setCategories,
    setSizes,
    setSubCategory,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    selectedMainCategory,
    setSelectedSizes,
    setSelectedSubCategory,
    resetCurrentPage,
  } = useFilterContext();

  function handleChange(e) {
    resetCurrentPage();
    const value = e.target.value;
    const isCheck = e.target.checked;

    if (isCheck) {
      let data = [];
      data.push(...selectedCategory, value);
      setSelectedCategory(data);
    }

    if (isCheck === false) {
      let data = [];
      data.push(...selectedCategory);
      const d = data.findIndex((option) => option === value);
      data.splice(d, 1);
      setSelectedCategory(data);
    }
  }

  useEffect(() => {
    async function handleFetchSize() {
      const resData = await fetchSizeData(
        selectedBrand,
        selectedMainCategory,
        selectedCategory,
        []
      );
      setSizes(resData.data);
    }
    async function handleFetchSubCategory() {
      const resData = await fetchSubCategoryHMData(
        selectedMainCategory,
        selectedCategory,
        []
      );
      setSubCategory(resData.data);
    }
    if (selectedBrand === "zara") {
      if (selectedCategory.length) {
        handleFetchSize();
      } else {
        setSizes(null);
        setSelectedSizes([]);
      }
    } else if (selectedBrand === "h&m") {
      if (selectedCategory.length) {
        handleFetchSubCategory();
      } else {
        setSubCategory(null);
        setSelectedSubCategory([]);
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedMainCategory.length == 0) {
      setSelectedCategory([]);
      setCategories(null);
    }
  }, [selectedMainCategory]);

  if (!categories) return null;

  return (
    <div className="mt-5 ">
      <div className="px-5 flex justify-between">
        <p className="font-medium">Category</p>
        {isToggle ? (
          <AiOutlineArrowUp
            className=" cursor-pointer"
            onClick={() => {
              setToggle(false);
            }}
          />
        ) : (
          <AiOutlineArrowDown
            className=" cursor-pointer"
            onClick={() => {
              setToggle(true);
            }}
          />
        )}
      </div>

      <div className={`${isToggle ? "block" : "hidden"} px-5 mt-3`}>
        {categories?.map((item, i) => (
          <div key={i} className="py-1 flex gap-x-3 items-center">
            <input
              checked={selectedCategory && selectedCategory.includes(item)}
              value={item}
              onChange={handleChange}
              type={"checkbox"}
            />
            <label htmlFor="">{item}</label>
          </div>
        ))}
      </div>

      <div className="w-full border mt-3 border-[#D0D0D0]"></div>
    </div>
  );
}
