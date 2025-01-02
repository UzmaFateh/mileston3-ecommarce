import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "@/app/page";
import Brands from "@/components/brands";
// import ProductListSec from "@/components/common/ProductListSec";
import Footer from "@/components/footer";
// import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
// import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";

const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];

export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  );

  if (!productData?.title) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-4">
       
        {/* <BreadcrumbProduct title={productData?.title ?? "product"}  /> */}
        <section className="mb-11">
          <Header data={productData} />
        </section>
        {/* <Tabs /> */}
      </div>
      <div className="mb-[50px] sm:mb-20">
        {/* <ProductListSec title="You might also like" data={relatedProductData} /> */}
        <Brands />
        <Footer/>
      </div>
    </main>
  );
}
