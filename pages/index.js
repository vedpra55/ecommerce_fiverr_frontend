// Page Components
import BestSellingProducts from "../pageComponents/home/bestSellingProducts";
import Brands from "../pageComponents/home/brands";
import Hero from "../pageComponents/home/hero";
import InMagzine from "../pageComponents/home/inMagzine";
import TopCategories from "../pageComponents/home/topCategories";

// Components
import { NavBar, ContactUs, Footer } from "../components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <TopCategories />
      <BestSellingProducts brand={"Zara"} />
      <BestSellingProducts brand={"Hm"} />
      <ContactUs />
      <Brands />
      <InMagzine />
      <Footer />
    </main>
  );
}
