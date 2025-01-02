"use client";

import { Product } from "@/types/product.types";
import Image from "next/image";
import React, { useState } from "react";

const PhotoSection = ({ data }: { data: Product }) => {
  const [selected, setSelected] = useState<string>(data.srcUrl);

  return (
    // <div className="flex flex-col-reverse lg:flex-row lg:space-x-3.5">
          <div className="flex flex-col-reverse lg:flex-col-reverse gap-8 p-2">

      {data?.gallery && data.gallery.length > 0 && (
        <div className="flex lg:flex-row  space-x-3 lg:space-x-0 lg:space-y-2 w-full lg:w-fit items-center lg:justify-start justify-center mx-auto">
          {data.gallery.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="bg-[#F0EEED] mx-4 w-full max-w-[90px] xl:max-w-[100px] max-h-[90px] xl:max-h-[100px] xl:min-h-[167px] aspect-square overflow-hidden"
              onClick={() => setSelected(photo)}
            >
              <Image
                src={photo}
                width={152}
                height={152}
                className=" w-full h-full object-cover hover:scale-110 transition-all duration-500 mx-auto "
                alt={data.title}
                priority
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center bg-[#F0EEED]  w-full sm:w-96 md:w-2/3 mx-auto h-full max-h-[530px] min-h-[330px] lg:min-h-[380px] xl:min-h-[530px] overflow-hidden mb-3 lg:mb-0">
        <Image
          src={selected}
          width={444}
          height={530}
          className=" w-full h-full object-cover hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoSection;
