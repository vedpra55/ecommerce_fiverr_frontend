import React, { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useFilterContext } from "../../context/filterDataContext";

import { fetchCategoryData } from "../../services/filterDataAPI";

export default function MainCategoriesOption({ isToggle, setToggle }) {
  const {
    mainCategory,
    setCategories,
    selectedBrand,
    selectedMainCategory,
    setSelectedMainCategory,
    setSelectedCategory,
    resetCurrentPage,
  } = useFilterContext();

  useEffect(() => {
    async function handleFetch() {
      const resData = await fetchCategoryData(
        selectedBrand,
        selectedMainCategory
      );
      setCategories(resData.data);
    }
    if (selectedMainCategory.length > 0) {
      handleFetch();
    } else {
      setCategories(null);
      setSelectedCategory([]);
    }
  }, [selectedMainCategory]);

  function handleChange(e) {
    resetCurrentPage();
    const value = e.target.value;
    const isCheck = e.target.checked;

    if (isCheck) {
      let data = [];
      data.push(...selectedMainCategory, value);
      setSelectedMainCategory(data);
    }

    if (isCheck === false) {
      let data = [];
      data.push(...selectedMainCategory);
      const d = data.findIndex((option) => option === value);
      data.splice(d, 1);
      setSelectedMainCategory(data);
      setSelectedCategory([]);
    }
  }

  if (!mainCategory) return null;

  return (
    <div className="mt-5 ">
      <div className="px-5 flex justify-between">
        <p className="font-medium">Main Categories</p>
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
        {mainCategory?.map((item, i) => (
          <div key={i} className="py-1 flex gap-x-3 items-center">
            <input
              checked={
                selectedMainCategory && selectedMainCategory.includes(item)
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
