import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const inputRef = useRef(null);
  const [inputClick, setInputClick] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [result, setResult] = useState([]);
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/search`;

  async function fetchSearchResult() {
    const data = {
      search: searchText.toUpperCase(),
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    if (response.ok) {
      setResult(resData?.data);
    }
  }

  useEffect(() => {
    if (searchText.length > 0) {
      fetchSearchResult();
    }
    if (!searchText) {
      setResult([]);
    }
  }, [searchText]);

  useEffect(() => {
    function cloaseDrawer(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputClick(false);
      }
    }

    document.body.addEventListener("click", cloaseDrawer);

    return () => document.body.removeEventListener("click", cloaseDrawer);
  }, []);

  return (
    <div className="relative">
      <input
        onFocus={() => setInputClick(true)}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        ref={inputRef}
        className="rounded-[90px] placeholder:text-xs placeholder:md:text-[16px] flex items-center w-[150px] md:w-[336px] md:h-[52px] border px-[30px] py-2 md:py-[18px]  outline-[#D9D9D9] border-[#D9D9D9] placeholder:text-black"
        type="text"
        placeholder="Поиск товара"
      />
      <div
        onClick={() => inputRef.current.focus()}
        className="text-xl cursor-pointer flex items-center absolute inset-0 left-[18rem] text-main "
      >
        <AiOutlineSearch />
      </div>
      {inputClick && (
        <div className=" z-50 absolute w-full h-56 bg-white shadow-md rounded-md overflow-y-scroll">
          <div className="px-3 py-3 flex flex-col gap-y-0 ">
            {result?.map((item) => (
              <Link href={`/${item._id}?brand=${item.productBrand}`}>
                <p
                  key={item._id}
                  className="md:text-[16px] text-xs hover:bg-gray-100 cursor-pointer py-2 md:py-3 px-2"
                >
                  {item.productName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
