import React, { useState } from "react";

import BrandOptions from "./brandsOption";
import MainCategoriesOption from "./mainCategoriesOption";
import CategoriesOption from "./categoriesOption";
import SubCategoriesOptions from "./subCategoriesOptions";
import SizeOptions from "./sizesOptions";
import { useFilterContext } from "../../context/filterDataContext";

export default function FilterOptions({ showFilter }) {
  const { selectedBrand, resetAllFilterValue } = useFilterContext();
  const [mainCategoryToggle, setMainCategoryToggle] = useState(true);
  const [brandToggle, setBrandToggle] = useState(true);
  const [sizeToggle, setSizeToggle] = useState(true);
  const [categoryToogle, setCategoryToggle] = useState(true);
  const [subCategoryToggle, setSubCategoryToggle] = useState(true);

  return (
    <section
      className={` ${
        showFilter ? "" : "hidden md:flex"
      } col-span-12 md:col-span-4 lg:col-span-3 flex  flex-col mb-10`}
    >
      <div className=" bg-[#F0F0F0] w-full  h-[56px] items-center  flex justify-center">
        <p className="font-medium text-[18px]">Фильтры</p>
      </div>

      <BrandOptions setToggle={setBrandToggle} isToggle={brandToggle} />

      <MainCategoriesOption
        setToggle={setMainCategoryToggle}
        isToggle={mainCategoryToggle}
      />

      <CategoriesOption
        setToggle={setCategoryToggle}
        isToggle={categoryToogle}
      />

      {selectedBrand === "h&m" && (
        <SubCategoriesOptions
          isToggle={subCategoryToggle}
          setToggle={setSubCategoryToggle}
        />
      )}

      <SizeOptions setToggle={setSizeToggle} isToggle={sizeToggle} />

      <button
        onClick={resetAllFilterValue}
        className=" btnHover hover:text-white text-[#898989] flex justify-center mt-5 h-[45px]   items-center w-full border  border-[#898989] rounded-lg"
      >
        <p className="">Сбросить фильтры</p>
      </button>
    </section>
  );
}
