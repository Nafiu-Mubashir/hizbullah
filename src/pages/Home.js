import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
    return (
        <div>
            <section className='bg-gradient-to-r from-green-100 via-white to-white '>
                <div className='lg:w-[80%] p-2 m-auto'>
                    <Hero />
                </div>
            </section>
            <section className='bg-green-100 '>
                <div className='lg:w-[80%] p-2 m-auto'>
                    <Header type={1} text={'Our Mission'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
                    <div className='flex gap-4 justify-between flex-col lg:flex-row'>
                        <div className='w-full lg:w-[50%]'>
                            <p className='font-bold text-[700] text-[16px] text-center lg:text-left lg:text-[24px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis </p>
                            <p className='text-justify'>tmolestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p className='flex items-center gap-3'>Read More <AiOutlineArrowRight /></p>
                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>

                                </div>
                                <div>
                                    <p className='font-bold text-center lg:text-left text-[700] text-[18px] lg:text-[24px]'>Building schools all around the country </p>
                                    <p className='text-center lg:text-left'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>

                                </div>
                                <div>
                                    <p className='font-bold text-center lg:text-left text-[700] text-[18px] lg:text-[24px]'>Impacting Education in the upcoming generation </p>
                                    <p className='text-center lg:text-left'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>

                                </div>
                                <div>
                                    <p className='font-bold text-center lg:text-left text-[700] text-[18px] lg:text-[24px]'>Building a community of .... </p>
                                    <p className='text-center lg:text-left'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home