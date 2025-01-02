"use client";

import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { Product } from "@/types/product.types";
import React from "react";
import {  FaHeart,FaEye } from 'react-icons/fa';
import { TiShoppingCart } from "react-icons/ti";
const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const dispatch = useAppDispatch();
  const { sizeSelection, colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );

  return (
   <div className="flex flex-wrap gap-4 mx-auto">
    
   <button className=" border-2 border-black w-[48px] ml-3 sm:ml-5 rounded-full  h-[48px]">
    <FaHeart className="text-black text-2xl mx-auto"/>
    </button>
    <button 
      type="button"
      className=" border-2 border-black w-[48px] ml-3 sm:ml-5 rounded-full  h-[48px]   "
      onClick={() =>
        dispatch(
          addToCart({
            id: data.id,
            name: data.title,
            srcUrl: data.srcUrl,
            price: data.price,
            attributes: [sizeSelection, colorSelection.name],
            discount: data.discount,
            quantity: data.quantity,
          })
        )
      }
    >
     <TiShoppingCart className="text-black text-2xl mx-auto"/>
    </button>
    <button className=" border-2 border-black w-[48px] ml-3 sm:ml-5 rounded-full  h-[48px]">
    <FaEye className="text-black text-2xl mx-auto"/>
    </button>
    </div>
   
  );
};

export default AddToCartBtn;
