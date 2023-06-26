import React from 'react'
import Topbar from '../../components/Topbar'
import { BsLinkedin } from "react-icons/bs"
import { AiFillTwitterSquare } from "react-icons/ai"
import Footerinfo from '../../components/Footerinfo'
import BottomNavbar from '../../components/BottomNavbar'
import Link from 'next/link'
import Image from 'next/image'

const index = () => {

    let data = [
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummyman.png"
        },
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummywomen.png"
        },
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummyman.png"
        },
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummyman.png"
        },
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummywomen.png"
        },
        {
            name: "Name",
            position: "CEO & Co-founder, Company Name",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni distinctio laborum officia veritatis. Obcaecati officiis facere minus cumque! Nobis provident, enim consequatur sequi impedit quo labore nisi recusandae facere iste.",
            twitter_url: "https://twitter.com",
            linkedin_url: "https://linkedin.com",
            img: "/../assets/dummyman.png"
        },

    ]

    return (
        <div>
            <Topbar />

            <h1 className='text-center text-[32px] font-semibold text-black/[0.8] my-[30px]'>OUR TEAM</h1>
            <div className='container xl:w-[80rem] mx-auto grid md:grid-cols-3 grid-cols-1 gap-[31px] mb-[80px]'>
                {
                    data.map((item: any, index: number) => (
                        <div className='flex items-center justify-center rounded-[3px] flex-col bg-[#2591B2]/[0.7] text-white py-[50px] cursor-pointer shadow-lg hover:scale-[102%] transform transition duration-350 ease-out'>
                            <div className='h-[110px] w-[110px] rounded-full bg-slate-500 overflow-hidden'>
                                <Image src={item.img} alt="" width={250} height={200}/>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-[10px] mt-[20px]'>
                                <h2 className='font-medium text-[18px] text-white'>{item.name}</h2>
                                <p className='text-[16px] font-normal'>{item.position}</p>
                                <div className='flex items-center gap-[20px]'>
                                    <Link href={item.linkedin_url}>
                                        <BsLinkedin fontSize={26} className='' />
                                    </Link>
                                    <Link href={item.twitter_url}>
                                        <AiFillTwitterSquare fontSize={34} />
                                    </Link>
                                </div>
                            </div>


                            <p className='max-w-[300px] text-center mt-[17px]'>{item.description}</p>


                        </div>
                    ))
                }



            </div>
            <BottomNavbar />
            <Footerinfo />
        </div>
    )
}

export default index