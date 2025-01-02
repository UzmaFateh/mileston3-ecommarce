import brand1 from "../../public/fa-brands-1.png"
import brand2 from "../../public/fa-brands-2.png"
import brand3 from "../../public/fa-brands-3.png"
import brand4 from "../../public/fa-brands-4.png"
import brand5 from "../../public/fa-brands-5.png"
import brand6 from "../../public/Vector.png"


import Image from "next/image"
import React from 'react'

const Brands = () => {
  return (
    <div>
          <div className='flex flex-wrap justify-between w-[100%] bg-gray-50 py-12 px-32'>
        <Image className='sm:w-[8%] my-4 '
        src={brand1}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4  '
        src={brand2}
        alt='cover'></Image>

<Image className='sm:w-[8%]my-4  '
        src={brand3}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4 '
        src={brand4}
        alt='cover'></Image>

<Image className='sm:w-[8%] my-4  '
        src={brand5}
        alt='cover'></Image>
 <Image className='sm:w-[8%]  -mt-6 my-4 '
        src={brand6}
        alt='cover'></Image>       
    </div>
    </div>
  )
}

export default Brands
