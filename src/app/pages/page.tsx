import React from 'react'
import { Product } from "@/types/product.types";
import ProductListSec from "@/components/common/ProductListSec";


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


const Pages = () => {
  return (
    <div>
      <center>
                <br />
                <h1 className='text-lg font-bold'>BESTSELLER PRODUCTS</h1>
                

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

        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title=""
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        </main>

        <div className='flex ml-[20%] sm:ml-[40%] my-10'>
      <table  className='border-2 rounded-md border-gray-400 border-separate'>
        <thead></thead>
        <tbody>
        <tr className='border-2 rounded-md border-gray-400 ' >
          <td className='bg-gray-100 text-gray-400 w-[60px] h-[50px] border-r-2 border-gray-400 text-center '>First</td>
          <td  className='text-blue-500 w-[30px] h-[50px] border-r-2 border-gray-400 text-center'>1</td>
          <td  className='text-blue-500 w-[30px] h-[50px] border-r-2 border-gray-400 text-center'>2</td>
          <td  className='text-blue-500 w-[30px] h-[50px] border-r-2 border-gray-400 text-center'>3</td>
          <td className='bg-blue-500 text-white w-[60px] h-[50px] text-center'>Next</td>
          
          
        </tr>
        </tbody>
      </table>
      
    </div>
    </div>
    
  )
}

export default Pages
