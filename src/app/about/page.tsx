import React from 'react'
import Image from 'next/image'
import aboutpic from "../../../public/desktop-header-24.png"
import videocard from "../../../public/Video card.png"
import media from "../../../public/media.png"
import media1 from "../../../public/media (1).png"
import media2 from "../../../public/media (2).png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import brand1 from "../../../public/fa-brands-1.png"
import brand2 from "../../../public/fa-brands-2.png"
import brand3 from "../../../public/fa-brands-3.png"
import brand4 from "../../../public/fa-brands-4.png"
import brand5 from "../../../public/fa-brands-5.png"
import brand6 from "../../../public/Vector.png"
import testimonial from "../../../public/desktop-testimonials-4.png"
import Footer from '@/components/footer'

const About = () => {
    return (
        <div>
            <div className=" flex flex-wrap justify-around">
                <div className="pt-[10%] pl-[10%] sm:w-[40%]">
                    <p className="text-lg font-semibold py-4">ABOUT COMPANY</p>

                    <h1 className="text-3xl sm:text-6xl font-semibold py-4">ABOUT US</h1>
                    <p className=" text-sm  py-4">We know how large objects will act,
                        but things on a small scale</p>
                    <div>


                        <button className="text-white font-semibold text-4 bg-blue-500 w-[184px] h-[52px] border-0 rounded-md">GET QUOTE NOW</button></div>

                </div>
                <Image className="sm:w-[40%]  pt-[2%]"
                    src={aboutpic}
                    alt="banner">

                </Image>
            </div>

            <div className='flex flex-wrap w-[86%] justify-between ml-[5%] mt-14  '>
                <div className='w-[80%] ml-[14%] sm:ml-10% sm:w-[35%]'>
                    <p className='text-sm text-red-600 my-3'>Problems trying</p>
                    <h1 className='text-2xl font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
                </div>
                <div className='w-[80%] sm:w-[50%]'>
                    <p className='text-gray-500 text-sm  pt-8 pl-10'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>


            <div className='flex flex-wrap justify-between w-[20%] sm:w-[80%] my-14 mx-auto'>
                <div className='my-3 text-center'>
                    <h1 className='text-3xl sm:text-6xl font-bold'>15K</h1>
                    <p className='text-sm text-gray'>Happy Customers</p>
                </div>
                <div className='my-3 text-center'>  <h1 className='text-3xl  sm:text-6xl font-bold'>150K</h1>
                    <p className='text-sm text-gray'>Monthly Visitors</p></div>
                <div className='my-3 text-center'>  <h1 className='text-3xl  sm:text-6xl font-bold'>15</h1>
                    <p className='text-sm text-gray'>Monthly Visitors</p></div>
                <div className='my-3 text-center'>  <h1 className='text-3xl  sm:text-6xl font-bold'>100+</h1>
                    <p className='text-sm text-gray'>Top Partners</p></div>
            </div>


            <div><Image className='w-[70%] ml-[15%] my-32'
                src={videocard}
                alt='card'
                width={100}
                height={100}></Image></div>


            <div>
                <center>
                    
                    <h1 className='text-4xl font-bold'>Meet Our Team</h1>
                    <p className='text-xs text-gray-600 mt-8'>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>

                </center>
                <div className='flex  flex-wrap justify-around ml-[8%] w-[90%]' >
                    <div >
                        <div className=''>
                            <Image className='mt-16  w-[100%] h-[210px]'
                                src={media}
                                alt='card'
                                width={100}
                                height={100}
                            ></Image>
                            <div className='text-center mt-[8%] mb-[4%]'>
                                <h4 className='text-base font-semibold'>Username</h4>
                                <p className='text-sm text-gray-500 font-semibold'>Profession</p>
                                <div className='flex gap-4 py-[30px] px-[20%] sm:px-[70px] text-2xl text-blue-500 ml-10'>
                                    <span><FaFacebook /></span>
                                    <span><FaInstagram /></span>
                                    <span><FaTwitter /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <Image className='mt-16 w-[100%] h-[210px]'
                                src={media1}
                                alt='card'
                            ></Image>
                            <div className='text-center mt-[8%] mb-[4%]'>
                                <h4 className='text-base font-semibold'>Username</h4>
                                <p className='text-sm text-gray-500 font-semibold'>Profession</p>
                                <div className='flex gap-4 py-[30px]  px-[20%] sm:px-[70px] text-2xl text-blue-500 ml-10'>
                                    <span><FaFacebook /></span>
                                    <span><FaInstagram /></span>
                                    <span><FaTwitter /></span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className=''>
                            <Image className='mt-16 w-[100%] h-[210px]'
                                src={media2}
                                alt='card'
                            ></Image>
                            <div className='text-center mt-[8%] mb-[4%]'>
                                <h4 className='text-base font-semibold'>Username</h4>
                                <p className='text-sm text-gray-500 font-semibold'>Profession</p>
                                <div className='flex gap-4 py-[30px]  px-[20%] sm:px-[70px] text-2xl text-blue-500 ml-10'>
                                    <span><FaFacebook /></span>
                                    <span><FaInstagram /></span>
                                    <span><FaTwitter /></span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

            <div className=' bg-gray-50'>
            <center>
                    
                    <h1 className='text-4xl font-bold mt-8 py-12'>Big Companies Are Here</h1>
                    <p className='text-xs text-gray-600'>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>

                </center>

                <div className='flex  justify-between w-[100%] py-12 px-32'>
        <Image className='w-[8%] h-[8%]'
        src={brand1}
        alt='cover'></Image>

<Image className='w-[8%] h-[8%]'
        src={brand2}
        alt='cover'></Image>

<Image className='w-[8%] h-[8%]'
        src={brand3}
        alt='cover'></Image>

<Image className='w-[8%] h-[8%]'
        src={brand4}
        alt='cover'></Image>

<Image className='w-[8%] h-[8%]'
        src={brand5}
        alt='cover'></Image>
 <Image className='w-[8%] h-[8%] -mt-6'
        src={brand6}
        alt='cover'></Image>       
    </div>
            </div>


            <div className=" flex flex-wrap justify-around">
                <div className="py-[10%] pl-[10%] sm:w-[60%] bg-blue-500 text-white">
                    <p className="text-lg font-semibold py-4 text-white">ABOUT COMPANY</p>

                    <h1 className="text-6xl font-semibold py-4">ABOUT US</h1>
                    <p className=" text-sm  py-4">We know how large objects will act,
                        but things on a small scale</p>
                    <div>


                        <button className="text-white font-semibold text-4 bg-blue-500 w-[184px] h-[52px] border-2 border-white rounded-md">GET QUOTE NOW</button></div>

                </div>
                <Image className="sm:w-[40%]  "
                    src={testimonial}
                    alt="banner">

                </Image>
            </div>
          <Footer />

        </div>
    )
}

export default About
