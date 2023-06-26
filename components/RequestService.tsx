import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs"
import Image from 'next/image'

const RequestService = () => {
    return (
        <div className='bg-[#F4F5F9] mt-[40px]'>
            <div className='container mx-auto xl:w-[80rem] sm:w-full  sm-w-full py-[60px] relative'>
                <h1 className='text-[25px] text-black/[0.7] mt-[10px] text-left font-bold'>Can't find your  desired service? Let us know 24/7 in 9851201580</h1>
                <div className='flex items-center gap-[30px] mt-[20px]'>
                    <button className='w-[180px] h-[50px] rounded-[4px] flex items-center justify-center bg-[#2591B2] hover:bg-[#2591B2]/[0.7] text-white text-[16px] font-semibold tracking-[0.02em]'>Request a service</button>
                    <button className='flex items-center justify-center gap-[10px] h-[50px] w-[180px] border border-[#2591B2] rounded-[4px] text-black'><BsFillTelephoneFill color='#2591B2' /> <a href="tel:9851201580"> 9851201580</a></button>
                </div>
                {/* <div>
                    <p className="text-[#000000CC] md:text-[16px] text-[10px] leading-[24px] font-normal  my-[16px]">
                        Enter mobile number to get APP download Link
                    </p>
                    <div className=" flex items-center  w-full">
                        <input
                            type="text"
                            placeholder="Type your mobile number"
                            className="border md:h-[56px] h-[40px] bg-white pl-[24px] md:w-[320px] w-full  input_btn outline-none text-[12px] md:text-[16px] "
                        />
                        <button className="bg-[#2591B2] rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] md:text-[16px] leading-[25.2px] font-normal md:pt-[16px] md:pb-[15px] md:pl-[35px] md:pr-[36px] h-[40px] md:h-[56px] px-[15px] sm:px-0 tracking-[0.1em] text-[12px] sm:w-32">
                            SEND
                        </button>
                    </div>
                </div> */}
                <Image width={250} height={200} src="/../assets/customercare2.png" className='absolute right-[5%] bottom-0 w-[250px] hidden md:block ' alt="" />
            </div>
        </div>
    )
}

export default RequestService