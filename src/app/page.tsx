import Image from "next/image";
import hero1 from "../../public/col-md-6 (1).png";
import hero2 from "../../public/col-md-3.png";
import hero3 from "../../public/card-item.png";
import hero4 from "../../public/media bg-cover.png";
import banner from "../../public/col-md-6 (2).png";
import hero5 from "../../public/hero-cover-1.png";
import Footer from "@/components/footer";




import ProductListSec from "@/components/common/ProductListSec";
// import Brands from "@/components/homepage/Brands";
// import DressStyle from "@/components/homepage/DressStyle";
// import Header from "@/components/homepage/Header";
// import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Yellow Top",
    srcUrl: "/fixed-height.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "White T-Shirt",
    srcUrl: "/product-cover-5.png",
    gallery: ["/product-cover-5.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Pink Top",
    srcUrl: "/product-cover-5 (1).png",
    gallery: ["/product-cover-5 (1).png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Brown Shirt With Printed Scirt",
    srcUrl: "/product-cover-5 (2).png",
    gallery: ["/product-cover-5 (2).png", "/product-cover-5 (2).png", "/product-cover-5 (2).png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
 
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Black Trouser",
    srcUrl: "/product-cover-5 (3).png",
    gallery: ["/product-cover-5 (3).png", "/product-cover-5 (3).png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 6,
    title: "White Bottom",
    srcUrl: "/fixed-height (1).png",
    gallery: ["/fixed-height (1).png","/fixed-height (1).png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 7,
    title: "Stripted Shirt",
    srcUrl: "/fixed-height (2).png",
    gallery: ["/fixed-height (2).png","/fixed-height (2).png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 8,
    title: "Black & White Shirt",
    srcUrl: "/fixed-height (3).png",
    gallery: ["/fixed-height (3).png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* hero section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/carousel 1.png')" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-16 text-white">
          <p className="text-xs font-semibold py-4">Summer 2020</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            NEW COLLECTION
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed max-w-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="px-6 py-3 bg-[#2DC071] hover:bg-blue-700 rounded-lg text-sm sm:text-base md:text-lg font-medium transition transform hover:scale-105">
            SHOP NOW
          </button>
        </div>
      </div>


      {/* ///////////////////////////////////////////////////////////// */}


      {/* Editor's Pick Section */}
      <div className="text-center pt-12 mt-4">
        <h1 className="font-semibold text-lg">Editor s Pick</h1>
        <p className="text-sm text-gray-500 pb-8">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-8">
        <Image className="w-full sm:w-[40%]" src={hero1} alt="carousel" width={100} height={100} />
        <Image className="w-full sm:w-[20%]" src={hero2} alt="carousel" width={100} height={100} />
        <div className="flex flex-wrap sm:flex-col justify-center gap-6">
          <Image className="w-full sm:w-[250px]" src={hero3} alt="carousel" width={250} height={90} />
          <Image className="w-full sm:w-[250px]" src={hero4} alt="carousel" width={250} height={90} />
        </div>
      </div>
      {/* <Brands /> */}
      <center>
                <p className='text-sm text-gray-400'>Featured Products</p>
                <h1 className='text-lg font-bold'>BESTSELLER PRODUCTS</h1>
                <p className='text-xs text-gray-400'>Problems trying to resolve the conflict between </p>

            </center>
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title=""
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />

<div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title=""
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        {/* Vita Classic Section */}
      <div className="bg-green-500 flex flex-wrap items-center justify-around gap-8 px-6 py-12">
        <div className="text-white w-full sm:w-[45%] text-center sm:text-left">
          <p className="text-lg font-semibold py-4">SUMMER 2020</p>
          <h1 className="text-4xl md:text-6xl font-semibold py-4">
            Vita Classic Product
          </h1>
          <p className="text-sm py-4">
            We know how large objects will act. We know how objects will act. We
            know.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <p className="text-2xl font-bold">$16.18</p>
            <button className="bg-green-400 text-white text-sm font-semibold py-3 px-6 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
        <Image
          className="w-full sm:w-[45%]"
          src={banner}
          alt="banner"
          width={500}
          height={500}
        />
      </div>
      {/* Hero Cover Section */}
      <div className="flex flex-wrap items-center justify-around gap-8 px-6 py-12">
        <Image
          className="w-full sm:w-[45%]"
          src={hero5}
          alt="banner"
          width={500}
          height={500}
        />
        <div className="w-full sm:w-[45%] text-center sm:text-left">
          <p className="text-gray-400 text-xs font-semibold py-4">SUMMER 2020</p>
          <h1 className="text-2xl md:text-4xl font-bold py-4">
            Part of the Neural Universe
          </h1>
          <p className="text-gray-500 text-sm md:text-xl py-4">
            We know how large objects will act. We know how objects will act. We
            know.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <button className="bg-green-400 text-white py-3 px-6 rounded-md">
              READ MORE
            </button>
            <button className="border-2 border-green-500 text-green-500 py-3 px-6 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
        {/* <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} /> */}
      </main>
    </>
  );
}
