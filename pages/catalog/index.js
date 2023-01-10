import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavBar, Footer, ContactUs, Breadcrumbs } from "../../components";

import FilterOptions from "../../pageComponents/catalog/filterOptions";
import ProductContainer from "../../pageComponents/catalog/productContainer";

export default function CatalogPage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <main>
      <NavBar />
      <section className="myContainer mt-[20px]">
        <Breadcrumbs text={"Хлебные крошки"} />
        {showFilter ? (
          <div className="md:hidden mt-4">
            <AiOutlineClose onClick={() => setShowFilter(false)} />
          </div>
        ) : (
          <div>
            <p className="mt-4 md:hidden" onClick={() => setShowFilter(true)}>
              Filters
            </p>
          </div>
        )}
        <div className="grid grid-cols-12 gap-x-5 mt-4 md:mt-[30px]">
          <FilterOptions showFilter={showFilter} />
          <ProductContainer />
        </div>
      </section>
      <ContactUs />
      <Footer noMargin={true} />
    </main>
  );
}
