import React from 'react'


import { FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import cover1 from "../../../public/card-item (1).png"
import cover2 from "../../../public/card-item (2).png"
import cover3 from "../../../public/card-item (3).png"
import cover4 from "../../../public/card-item (4).png"
import cover5 from "../../../public/card-item (5).png"
import { MdOutlineWindow } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import Brand from "../../components/brands";
import Footer from '@/components/footer';
// import Link from 'next/link';



const Shop = () => {
    return (
        <div>
            <div className='bg-gray-100 my-[30px] py-10'>
                <div className='flex justify-between h-[90px] pt-10 sm:mx-16 px-10 '>
                    <div><h1 className='text-2xl font-bold'>Shop</h1></div>
                    <div className='flex sm:gap-4 '>
                        <p >Home</p>
                        <p className='pt-2'><FaChevronRight /></p>
                        <p>Shop</p>
                    </div>

                </div>
    


            </div>

            <div className='flex flex-wrap w-[86%] justify-between ml-[7%]'>
        <Image className='w-[100%] sm:w-[17%] my-3 '
        src={cover1}
        alt='cover'></Image>

<Image className='w-[100%] sm:w-[17%]  my-3'
        src={cover2}
        alt='cover'></Image>

<Image className='w-[100%] sm:w-[17%]  my-3'
        src={cover3}
        alt='cover'></Image>

<Image className='w-[100%] sm:w-[17%]  my-3'
        src={cover4}
        alt='cover'></Image>
    <Image className='w-[100%] sm:w-[17%]  my-3'
        src={cover5}
        alt='cover'></Image>


    </div>
            <div className='flex flex-wrap justify-evenly my-10 py-10'>

                <h1 className=' w-[80%] pl-[15%] sm:pl-0 sm:w-[20%] pt-2'>Showing all 12 results</h1>
                <div className='flex gap-2 '><p className='pt-8 sm:pt-2'>Views :</p>
                    <button className='border-2 border-gray-300 bg-gray-100 w-[50px] h-[50px] rounded text-2xl pl-3 mt-6 sm:mt-0'><MdOutlineWindow /></button>
                    <button className='border-2 border-gray-300 bg-gray-100 w-[50px] h-[50px] rounded text-2xl pl-3 mt-6 sm:mt-0'> <FaBars /></button>
                </div>

                <div className='flex gap-2'>
                    <button className="text-white font-semibold text-4 bg-gray-200 w-[174px] h-[52px]  border-0 rounded-md mt-6 sm:mt-0 ">POPULARITY</button>
                    <button className="text-white font-semibold text-4 bg-blue-500 w-[110px] h-[52px]  border-0 rounded-md mt-6 sm:mt-0">FILTER</button>
                </div>
            </div>
            
          



            <Brand />
            <Footer />

        </div>

    )
}

export default Shop


