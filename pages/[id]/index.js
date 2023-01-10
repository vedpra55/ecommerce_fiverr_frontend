import {
  NavBar,
  Footer,
  ProductContainer,
  ContactUs,
  Breadcrumbs,
} from "../../components";

import { useRouter } from "next/router";
import useSwr from "swr";
import {
  fetchSingleProduct,
  fetchSimilarProducts,
} from "../../services/productDataAPI";
import ProductImages from "../../pageComponents/productDetails/productImages";
import ProductInfo from "../../pageComponents/productDetails/productInfo";

export default function ProductDetailsPage() {
  const router = useRouter();
  const id = router.query.id;
  const brand = router.query.brand;

  const { data: product } = useSwr([id, brand], fetchSingleProduct);
  const { data: similarProducts } = useSwr(
    [id, product],
    product ? fetchSimilarProducts : null
  );

  if (!product) return null;
  if (!product?.data) {
    return <div className="h-96 w-full text-center">Something goes wrong</div>;
  }

  return (
    <main>
      <NavBar />
      <section className="mt-[20px] mb-[115px] myContainer">
        <Breadcrumbs text={"Хлебные крошки"} />
        <div className="grid grid-cols-12 gap-y-10  md:gap-x-[25px] mt-[30px]">
          <ProductImages
            images={product?.data?.productDetails.images}
            name={product.data?.productName}
          />
          <ProductInfo product={product} />
        </div>
        <ProductContainer
          products={similarProducts?.data}
          title="Похожие товары"
        />
      </section>
      <ContactUs />
      <Footer noMargin={true} />
    </main>
  );
}
