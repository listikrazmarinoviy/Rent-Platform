import FilterLocation from "@/components/filterLocation/FilterLocation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsFilter from "@/components/productsFilter/ProductsFilter";

export default function Home() {
  return (
    <div>
      <Header />
      <FilterLocation />
      <ProductsFilter />
      <Footer />
    </div>
  );
}
