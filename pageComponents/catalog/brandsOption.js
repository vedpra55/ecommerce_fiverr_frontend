import { Radio, RadioGroup } from "react-radio-group";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import useInitalRender from "../../hooks/useIntialRender";
import { useFilterContext } from "../../context/filterDataContext";
import { useEffect } from "react";

import { fetchMainCategoryData } from "../../services/filterDataAPI";

export default function BrandOptions({ isToggle, setToggle }) {
  const isFirst = useInitalRender();

  const {
    selectedBrand,
    setSelectedBrand,
    setSelectedMainCategory,
    setMainCategory,
    resetCurrentPage,
  } = useFilterContext();

  useEffect(() => {
    async function handleFetch() {
      const resData = await fetchMainCategoryData(selectedBrand);
      setMainCategory(resData.data);
    }

    if (!isFirst) {
      setSelectedMainCategory([]);
    }

    handleFetch();
  }, [selectedBrand]);

  function handleChange(e) {
    resetCurrentPage();
    setSelectedBrand(e);
  }

  return (
    <div className="mt-5 px-5">
      <div className="flex justify-between items-center">
        <p className="font-medium">Brands</p>
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
      <div
        onChange={(e) => e.target.value}
        className={`${isToggle ? "block" : "hidden"} mt-3`}
      >
        <RadioGroup
          selectedValue={selectedBrand}
          name="brands"
          onChange={handleChange}
        >
          <div className="flex mb-2 mt-3 items-center gap-x-5">
            <Radio value={"zara"} />
            <p>Zara</p>
          </div>
          <div className="flex mb-2 mt-3 items-center gap-x-5">
            <Radio value={"h&m"} />
            <p>H&M</p>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
