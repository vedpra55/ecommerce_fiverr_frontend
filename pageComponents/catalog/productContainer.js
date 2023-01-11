import React, { useEffect, useState } from "react";
import useSwr from "swr";
import { Oval } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { ProductCard } from "../../components";
import { useFilterContext } from "../../context/filterDataContext";
import useIntialRender from "../../hooks/useIntialRender";

export default function ProductContainer() {
  const {
    selectedBrand,
    selectedMainCategory,
    selectedCategory,
    selectedSubCategory,
    selectedSizes,
    currentPage,
    setCurrentPage,
    sortType,
    setSortType,
    selectedSort,
    setSelectedSort,
  } = useFilterContext();

  const [pageCount, setPageCount] = useState(0);
  const isFirst = useIntialRender();

  async function fetchProducts() {
    const data = {
      brand: selectedBrand,
      mainCategory:
        selectedMainCategory?.length !== 0 ? selectedMainCategory : null,
      category: selectedCategory?.length !== 0 ? selectedCategory : null,
      sizes: selectedSizes?.length === 0 ? null : selectedSizes,
      subCategory:
        selectedSubCategory.length === 0 ? null : selectedSubCategory,
      sort: sortType,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=${currentPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return res.json();
  }

  const { data } = useSwr(
    [
      "catalog",
      selectedMainCategory,
      selectedCategory,
      selectedSizes,
      currentPage,
      selectedBrand,
      selectedSubCategory,
      sortType,
    ],
    fetchProducts
  );

  useEffect(() => {
    const pageCount = (data?.total / 12).toFixed(0);
    setPageCount(pageCount);
  }, [data]);

  useEffect(() => {
    if (!isFirst) {
      setCurrentPage(0);
    }
  }, [sortType]);

  function handlePageClick(event) {
    const newOffset = (event.selected * 12) % data?.total;
    setCurrentPage(newOffset / 12);
  }

  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <h2 className="text-3xl font-bold">Доступные товары в наличие</h2>
      <div className="flex justify-between md:justify-start md:gap-x-[15px] items-center mt-[15px]">
        <p>Сортировать по:</p>
        <select
          onChange={(e) => {
            setSelectedSort(e.target.value);
            setSortType(e.target.selectedOptions[0].id);
          }}
          value={selectedSort}
          className="border  py-2 md:w-[270px] md:h-[45px] rounded-[90px] px-3 border-[#D9D9D9]"
        >
          <option id={"price"} label="Cheapest First" value={1} />
          <option id={"-price"} label="Expensive First" value={-1} />
          <option id={"-totalSales"} label="Most Sales" value={2} />
        </select>
      </div>
      <div className="grid grid-cols-12 gap-x-5 gap-y-5 mt-[15px]">
        {data?.data ? (
          data.data.map((item) => (
            <div className="col-span-6 lg:col-span-4" key={item._id}>
              <ProductCard product={item} />
            </div>
          ))
        ) : (
          <div className="col-span-12 h-96 flex items-center justify-center">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </div>
      <div className="flex">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          initialPage={currentPage}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="paginationContainer"
          pageClassName="page-item"
          activeClassName="selected-page"
          previousClassName="toggle-item"
          nextClassName="toggle-item"
        />
      </div>
    </div>
  );
}
