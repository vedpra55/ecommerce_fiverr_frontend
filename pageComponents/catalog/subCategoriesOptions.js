import React, { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useFilterContext } from "../../context/filterDataContext";

import { fetchSizeData } from "../../services/filterDataAPI";

export default function SubCategoriesOptions({ isToggle, setToggle }) {
  const {
    selectedSubCategory,
    setSelectedSubCategory,
    selectedMainCategory,
    selectedCategory,
    subCategory,
    selectedBrand,
    setSizes,
    setSelectedSizes,
    resetCurrentPage,
  } = useFilterContext();

  function handleChange(e) {
    resetCurrentPage();
    const value = e.target.value;
    const isCheck = e.target.checked;

    if (isCheck) {
      let data = [];
      data.push(...selectedSubCategory, value);
      setSelectedSubCategory(data);
    }

    if (isCheck === false) {
      let data = [];
      data.push(...selectedSubCategory);
      const d = data.findIndex((option) => option === value);
      data.splice(d, 1);
      setSelectedSubCategory(data);
    }
  }

  useEffect(() => {
    async function handleFetchSize() {
      const resData = await fetchSizeData(
        selectedBrand,
        selectedMainCategory,
        selectedCategory,
        selectedSubCategory
      );
      setSizes(resData.data);
    }
    if (selectedSubCategory.length) {
      handleFetchSize();
    } else {
      setSizes(null);
      setSelectedSizes([]);
    }
  }, [selectedSubCategory]);

  if (!subCategory) return null;

  return (
    <div className="mt-5 ">
      <div className="px-5 flex justify-between">
        <p className="font-medium">Sub Categories</p>
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
        {subCategory?.map((item, i) => (
          <div key={i} className="py-1 flex gap-x-3 items-center">
            <input
              checked={
                selectedSubCategory && selectedSubCategory.includes(item)
              }
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
