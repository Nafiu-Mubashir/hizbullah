import React from 'react'
import { Button } from '../components/Button'
import { Carousels, ProjectCarousel, TestimoniesCaroulsel } from '../components/Carousels';
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from '../components/ImageContainer';

const Home = () => {
    return (
        <div className='mt-12'>
            <section className='bg-gradient-to-r from-green-100 via-green-50 to-white '>
                <div className='lg:w-[90%] p-2 m-auto'>
                    <Hero />
                </div>
            </section>
            <section className='bg-green-100 '>
                <div className='lg:w-[90%] p-3 lg:p-2 m-auto'>
                    <div className="relative flex justify-between m-auto top-[-40px] lg:top-[-50px] lg:w-[50%]">
                        <div className='h-[105px] lg:h-[134px] w-[120px] lg:w-[132px] bg-white rounded-lg shadow-lg lg:p-3'>
                            <h3 className='text-[36px] lg:text-[36px] font-700 font-bold mb-3 text-[#45CD45] text-center'>2K+</h3>
                            <p className='text-[14px] text-center'>Schools Built</p>
                        </div>
                        <div className='h-[105px] lg:h-[134px] w-[120px] lg:w-[132px] bg-white rounded-lg shadow-lg lg:p-3 mt-28 lg:mt-0'>
                            <h3 className='text-[36px] lg:text-[36px] font-700 font-bold mb-3 text-[#45CD45] text-center'>90+</h3>
                            <p className='text-[14px] text-center'>Qualified staffs</p>
                        </div>
                        <div className='h-[105px] lg:h-[134px] w-[120px] lg:w-[132px] bg-white rounded-lg shadow-lg lg:p-3'>
                            <h3 className='text-[36px] lg:text-[36px] font-700 font-bold mb-3 text-[#45CD45] text-center'>99%</h3>
                            <p className='text-[14px] text-center'>Qualified staffs</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-green-100 '>
                <div className='lg:w-[90%] p-2 m-auto'>
                    <Header type={1} text={'Our Mission'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
                    <div className='flex gap-4 justify-between flex-col lg:flex-row'>
                        <div className='w-full lg:w-[50%] p-2 lg:p-5'>
                            <p className='font-bold text-[700] text-[16px] text-center lg:text-left lg:text-[24px]'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis </p>
                            <p className='text-justify mb-4'>tmolestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p className='flex items-center gap-3'>Read More
                                <svg className='mt-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z" fill="#45CD45" />
                                    <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="#45CD45" />
                                </svg>

                            </p>
                        </div>
                        <div className='w-full lg:w-[50%] p-2 lg:p-5'>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>
                                    <svg className='mt-4 mx-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.70001 18.75H4.15002C2.31002 18.75 1.25 17.69 1.25 15.85V4.15002C1.25 2.31002 2.31002 1.25 4.15002 1.25H8.45001C10.29 1.25 11.35 2.31002 11.35 4.15002V6C11.35 6.41 11.01 6.75 10.6 6.75C10.19 6.75 9.84998 6.41 9.84998 6V4.15002C9.84998 3.13002 9.47001 2.75 8.45001 2.75H4.15002C3.13002 2.75 2.75 3.13002 2.75 4.15002V15.85C2.75 16.87 3.13002 17.25 4.15002 17.25H6.70001C7.11001 17.25 7.45001 17.59 7.45001 18C7.45001 18.41 7.11001 18.75 6.70001 18.75Z" fill="#45CD45" />
                                        <path d="M14.9602 22.75H9.12018C7.11018 22.75 5.9502 21.59 5.9502 19.58V8.41998C5.9502 6.40998 7.11018 5.25 9.12018 5.25H14.9602C16.9702 5.25 18.1202 6.40998 18.1202 8.41998V19.58C18.1202 21.59 16.9702 22.75 14.9602 22.75ZM9.12018 6.75C7.92018 6.75 7.4502 7.21998 7.4502 8.41998V19.58C7.4502 20.78 7.92018 21.25 9.12018 21.25H14.9602C16.1502 21.25 16.6202 20.78 16.6202 19.58V8.41998C16.6202 7.21998 16.1502 6.75 14.9602 6.75H9.12018Z" fill="#45CD45" />
                                        <path d="M19.8499 18.75H17.3699C16.9599 18.75 16.6199 18.41 16.6199 18C16.6199 17.59 16.9599 17.25 17.3699 17.25H19.8499C20.8699 17.25 21.2499 16.87 21.2499 15.85V4.15002C21.2499 3.13002 20.8699 2.75 19.8499 2.75H15.5499C14.5299 2.75 14.1499 3.13002 14.1499 4.15002V6C14.1499 6.41 13.8099 6.75 13.3999 6.75C12.9899 6.75 12.6499 6.41 12.6499 6V4.15002C12.6499 2.31002 13.7099 1.25 15.5499 1.25H19.8499C21.6899 1.25 22.7499 2.31002 22.7499 4.15002V15.85C22.7499 17.69 21.6899 18.75 19.8499 18.75Z" fill="#45CD45" />
                                        <path d="M14 11.75H10C9.59 11.75 9.25 11.41 9.25 11C9.25 10.59 9.59 10.25 10 10.25H14C14.41 10.25 14.75 10.59 14.75 11C14.75 11.41 14.41 11.75 14 11.75Z" fill="#45CD45" />
                                        <path d="M14 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H14C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75Z" fill="#45CD45" />
                                        <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="#45CD45" />
                                    </svg>

                                </div>
                                <div>
                                    <p className='font-bold text-center lg:text-left text-[700] text-[18px] lg:text-[24px]'>Building schools all around the country </p>
                                    <p className='text-center lg:text-left'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>
                                    <svg className='mt-4 mx-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22.08C11.7 22.08 11.4 22.01 11.15 21.87C9.28 20.85 5.99 19.77 3.93 19.5L3.64 19.46C2.33 19.3 1.25 18.07 1.25 16.74V4.66001C1.25 3.87001 1.56 3.15001 2.13 2.63001C2.7 2.11001 3.44 1.86001 4.22 1.93001C6.42 2.10001 9.74 3.20001 11.62 4.38001L11.86 4.52001C11.93 4.56001 12.08 4.56001 12.14 4.53001L12.3 4.43001C14.18 3.25001 17.5 2.13001 19.71 1.94001C19.73 1.94001 19.81 1.94001 19.83 1.94001C20.56 1.87001 21.31 2.13001 21.87 2.65001C22.44 3.17001 22.75 3.89001 22.75 4.68001V16.75C22.75 18.09 21.67 19.31 20.35 19.47L20.02 19.51C17.96 19.78 14.66 20.87 12.83 21.88C12.59 22.02 12.3 22.08 12 22.08ZM3.98 3.42001C3.66 3.42001 3.37 3.53001 3.14 3.74001C2.89 3.97001 2.75 4.30001 2.75 4.66001V16.74C2.75 17.33 3.26 17.9 3.83 17.98L4.13 18.02C6.38 18.32 9.83 19.45 11.83 20.54C11.92 20.58 12.05 20.59 12.1 20.57C14.1 19.46 17.57 18.32 19.83 18.02L20.17 17.98C20.74 17.91 21.25 17.33 21.25 16.74V4.67001C21.25 4.30001 21.11 3.98001 20.86 3.74001C20.6 3.51001 20.27 3.40001 19.9 3.42001C19.88 3.42001 19.8 3.42001 19.78 3.42001C17.87 3.59001 14.79 4.62001 13.11 5.67001L12.95 5.78001C12.4 6.12001 11.62 6.12001 11.09 5.79001L10.85 5.65001C9.14 4.60001 6.06 3.58001 4.1 3.42001C4.06 3.42001 4.02 3.42001 3.98 3.42001Z" fill="#45CD45" />
                                        <path d="M12 21.24C11.59 21.24 11.25 20.9 11.25 20.49V5.48999C11.25 5.07999 11.59 4.73999 12 4.73999C12.41 4.73999 12.75 5.07999 12.75 5.48999V20.49C12.75 20.91 12.41 21.24 12 21.24Z" fill="#45CD45" />
                                        <path d="M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z" fill="#45CD45" />
                                        <path d="M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z" fill="#45CD45" />
                                    </svg>

                                </div>
                                <div>
                                    <p className='font-bold text-center lg:text-left text-[700] text-[18px] lg:text-[24px]'>Impacting Education in the upcoming generation </p>
                                    <p className='text-center lg:text-left'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col lg:flex-row gap-3 mb-3'>
                                <div className='w-[56px] m-auto lg:w-[80px] h-[56px] bg-white rounded-md mt-2 '>
                                    <svg className='mt-4 mx-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9998 7.91002C17.9698 7.91002 17.9498 7.91002 17.9198 7.91002H17.8698C15.9798 7.85002 14.5698 6.39001 14.5698 4.59001C14.5698 2.75001 16.0698 1.26001 17.8998 1.26001C19.7298 1.26001 21.2298 2.76001 21.2298 4.59001C21.2198 6.40001 19.8098 7.86001 18.0098 7.92001C18.0098 7.91001 18.0098 7.91002 17.9998 7.91002ZM17.8998 2.75002C16.8898 2.75002 16.0698 3.57002 16.0698 4.58002C16.0698 5.57002 16.8398 6.37002 17.8298 6.41002C17.8398 6.40002 17.9198 6.40002 18.0098 6.41002C18.9798 6.36002 19.7298 5.56002 19.7398 4.58002C19.7398 3.57002 18.9198 2.75002 17.8998 2.75002Z" fill="#45CD45" />
                                        <path d="M18.01 15.28C17.62 15.28 17.23 15.25 16.84 15.18C16.43 15.11 16.16 14.72 16.23 14.31C16.3 13.9 16.69 13.63 17.1 13.7C18.33 13.91 19.63 13.68 20.5 13.1C20.97 12.79 21.22 12.4 21.22 12.01C21.22 11.62 20.96 11.24 20.5 10.93C19.63 10.35 18.31 10.12 17.07 10.34C16.66 10.42 16.27 10.14 16.2 9.73002C16.13 9.32002 16.4 8.93003 16.81 8.86003C18.44 8.57003 20.13 8.88002 21.33 9.68002C22.21 10.27 22.72 11.11 22.72 12.01C22.72 12.9 22.22 13.75 21.33 14.35C20.42 14.95 19.24 15.28 18.01 15.28Z" fill="#45CD45" />
                                        <path d="M5.96998 7.91C5.95998 7.91 5.94998 7.91 5.94998 7.91C4.14998 7.85 2.73998 6.39 2.72998 4.59C2.72998 2.75 4.22998 1.25 6.05998 1.25C7.88998 1.25 9.38998 2.75 9.38998 4.58C9.38998 6.39 7.97998 7.85 6.17998 7.91L5.96998 7.16L6.03998 7.91C6.01998 7.91 5.98998 7.91 5.96998 7.91ZM6.06998 6.41C6.12998 6.41 6.17998 6.41 6.23998 6.42C7.12998 6.38 7.90998 5.58 7.90998 4.59C7.90998 3.58 7.08998 2.75999 6.07998 2.75999C5.06998 2.75999 4.24998 3.58 4.24998 4.59C4.24998 5.57 5.00998 6.36 5.97998 6.42C5.98998 6.41 6.02998 6.41 6.06998 6.41Z" fill="#45CD45" />
                                        <path d="M5.96 15.28C4.73 15.28 3.55 14.95 2.64 14.35C1.76 13.76 1.25 12.91 1.25 12.01C1.25 11.12 1.76 10.27 2.64 9.68002C3.84 8.88002 5.53 8.57003 7.16 8.86003C7.57 8.93003 7.84 9.32002 7.77 9.73002C7.7 10.14 7.31 10.42 6.9 10.34C5.66 10.12 4.35 10.35 3.47 10.93C3 11.24 2.75 11.62 2.75 12.01C2.75 12.4 3.01 12.79 3.47 13.1C4.34 13.68 5.64 13.91 6.87 13.7C7.28 13.63 7.67 13.91 7.74 14.31C7.81 14.72 7.54 15.11 7.13 15.18C6.74 15.25 6.35 15.28 5.96 15.28Z" fill="#45CD45" />
                                        <path d="M11.9998 15.38C11.9698 15.38 11.9498 15.38 11.9198 15.38H11.8698C9.97982 15.32 8.56982 13.86 8.56982 12.06C8.56982 10.22 10.0698 8.72998 11.8998 8.72998C13.7298 8.72998 15.2298 10.23 15.2298 12.06C15.2198 13.87 13.8098 15.33 12.0098 15.39C12.0098 15.38 12.0098 15.38 11.9998 15.38ZM11.8998 10.22C10.8898 10.22 10.0698 11.04 10.0698 12.05C10.0698 13.04 10.8398 13.84 11.8298 13.88C11.8398 13.87 11.9198 13.87 12.0098 13.88C12.9798 13.83 13.7298 13.03 13.7398 12.05C13.7398 11.05 12.9198 10.22 11.8998 10.22Z" fill="#45CD45" />
                                        <path d="M11.9998 22.76C10.7998 22.76 9.59978 22.45 8.66978 21.82C7.78978 21.23 7.27979 20.39 7.27979 19.49C7.27979 18.6 7.77978 17.74 8.66978 17.15C10.5398 15.91 13.4698 15.91 15.3298 17.15C16.2098 17.74 16.7198 18.58 16.7198 19.48C16.7198 20.37 16.2198 21.23 15.3298 21.82C14.3998 22.44 13.1998 22.76 11.9998 22.76ZM9.49979 18.41C9.02979 18.72 8.77979 19.11 8.77979 19.5C8.77979 19.89 9.03979 20.27 9.49979 20.58C10.8498 21.49 13.1398 21.49 14.4898 20.58C14.9598 20.27 15.2098 19.88 15.2098 19.49C15.2098 19.1 14.9498 18.72 14.4898 18.41C13.1498 17.5 10.8598 17.51 9.49979 18.41Z" fill="#45CD45" />
                                    </svg>

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

            <section>

                <div className='lg:w-[90%] p-2 m-auto'>

                    <Header type={1} text={'About Us'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
                    <div className='flex justify-between flex-col lg:flex-row'>
                        <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
                            <p className='mb-4'>
                                Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

                            </p>
                            <Button text={'Discover more'} className={'m-auto lg:m-0'} />
                        </div>
                        <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
                            <Image type={1} />
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className='lg:w-[90%] p-2 m-auto'>
                    <TestimoniesCaroulsel />
                </div>
            </section>
            <section className='bg-green-100 '>
                <div className='lg:w-[90%] p-2 m-auto'>
                    <Header type={1} text={'Our Projects'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
                    <p className='text-center'>Take a look at some of our projects we have done across the country, while some are still ongoing</p>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={5000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 20
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={2}
                        swipeable
                    >
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                        <Image type={4} />
                    </Carousel>
                </div>
            </section>
            <section>
                <div className='lg:w-[90%] p-2 m-auto'>
                    <Header type={1} text={'Our Latest Updates'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
                    <Carousels />
                </div>
            </section>
        </div>
    )
}

export default Home