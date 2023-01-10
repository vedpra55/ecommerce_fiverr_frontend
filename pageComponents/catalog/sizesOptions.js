import React, { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useFilterContext } from "../../context/filterDataContext";

export default function SizeOptions({ isToggle, setToggle }) {
  const { sizes, selectedSizes, setSelectedSizes, resetCurrentPage } =
    useFilterContext();

  function handleChange(e) {
    resetCurrentPage();
    const value = e.target.value;
    const isCheck = e.target.checked;

    if (isCheck) {
      let data = [];
      data.push(...selectedSizes, value);
      setSelectedSizes(data);
    }

    if (isCheck === false) {
      let data = [];
      data.push(...selectedSizes);
      const d = data.findIndex((option) => option === value);
      data.splice(d, 1);
      setSelectedSizes(data);
    }
  }

  if (!sizes) return null;

  return (
    <div className="mt-5 ">
      <div className="px-5 flex justify-between">
        <p className="font-medium">Sizes</p>
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
        {sizes?.map((item, i) => (
          <div key={i} className="py-1 flex gap-x-3 items-center">
            <input
              checked={selectedSizes && selectedSizes.includes(item)}
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
