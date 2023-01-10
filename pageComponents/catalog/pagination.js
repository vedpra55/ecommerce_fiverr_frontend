import React from "react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalProducts,
}) {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(totalProducts / 12); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center mt-[40px] flex-wrap items-start gap-x-3 gap-y-5">
      {pageNumber.map(
        (item) =>
          pageNumber.length !== item && (
            <div
              className={`${
                currentPage === item
                  ? "bg-main text-white"
                  : "text-black bg-[#E3E3E3]"
              } rounded-full w-8 h-8 cursor-pointer flex items-center justify-center`}
              onClick={() => setCurrentPage(item)}
              key={item}
            >
              {item + 1}
            </div>
          )
      )}
    </div>
  );
}
