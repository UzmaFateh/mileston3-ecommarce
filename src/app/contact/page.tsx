import React from 'react'
import Image from 'next/image'
import contactpic from "../../../public/desktop-header-24 (1).png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from '@/components/footer';

const Contact = () => {
  return (
    <div>
      <div className=" flex flex-wrap justify-around">
        <div className="pt-[10%] pl-[5%] w-[80%] sm:w-[40%]">
          <p className="text-lg font-semibold py-4">CONTACT US</p>
        <h1 className="text-2xl sm:text-6xl font-bold py-4">Get in touch
            today!</h1>
          <p className=" text-base sm:text-lg  py-4">We know how large objects will act,
            but things on a small scale</p>
          <p className='text-base sm:text-lg font-bold'>Phone ; +451 215 215</p>
          <p className='text-base sm:text-lg font-bold'>Fax : +451 215 215</p>
          <div className='flex gap-4 py-[30px] text-2xl text-blue-500'>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
          </div>
          <div>


            </div>

        </div>
        <Image className="sm:w-[40%]  pt-[2%]"
          src={contactpic}
          alt="banner">

        </Image>
      </div>


      <div className='my-16 w-[80%] ml-[10%] sm:ml-0'><center>
        <p>VISIT OUR OFFICE</p>
        <h1 className='text-4xl'>We help small businesses 
        with big ideas</h1></center></div>
        <center>
      <div className='flex flex-wrap w-[75%] justify-evenly'>

        <div className=' w-[80%] sm:w-[25%] bg-white hover:bg-gray-500 '>
          <center>
            <div className='text-6xl my-4 text-blue-400  '><FaPhoneAlt /></div>
            <p className='text-sm my-4 font-bold'>georgia.young@example</p>
            <h1 className='text-base my-4 font-bold'>Get Support</h1>
            <button className='text-blue-500 border-2 border-blue-500 rounded-full w-[80%] my-4 h-[50px] font-bold '>Submit Request</button>
          </center>
        </div>

        <div className='w-[80%] sm:w-[25%] bg-white hover:bg-gray-500  '>
          <center>
            <div className='text-6xl my-4 text-blue-400 '><FaLocationDot /></div>
            <p className='text-sm my-4 font-bold'>georgia.young@example</p>
            <h1 className='text-base my-4 font-bold'>Get Support</h1>
            <button className='text-blue-500 border-2 border-blue-500 rounded-full w-[80%] my-4 h-[50px] font-bold '>Submit Request</button>
          </center>
        </div>

        <div className='w-[80%] sm:w-[25%] bg-white hover:bg-gray-500  '>
          <center>
            <div className='text-6xl my-4 text-blue-400 '><MdEmail /></div>
            <p className='text-sm my-4 font-bold'>georgia.young@example</p>
            <h1 className='text-base my-4 font-bold'>Get Support</h1>
            <button className='text-blue-500 border-2 border-blue-500 rounded-full w-[80%] my-4 h-[50px] font-bold '>Submit Request</button>
           
          </center>
        </div>
      
      </div>
      </center>

      <div className='mt-24 '>
        <center>
        <p>WE CAN NOT WAIT TO MEET YOU</p>
        <h1 className='text-4xl'> Let,s Talk</h1>
       <button className='text-white bg-blue-500 w-[70%] sm:w-[20%] my-4 h-[50px] font-bold '>Try it here now</button>
        </center>
        </div>
        <Footer />
      
      
    </div>
  )
}

export default Contact