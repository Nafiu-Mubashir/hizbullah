import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
// import logo from '../assets/navLogo.png';
// import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleDropDown = () => {
        setDropDown(!dropDown)
        console.log(dropDown);
    }

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggle(false);
                    setDropDown(false)
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    };


    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className='sticky z-50 w-full'>

            <nav className="bg-white border-gray-200 sm:px-4 shadow">
                <div className="container flex flex-wrap items-center justify-between mx-auto lg:w-[80%] p-2">
                    <NavLink to='/home'>
                        <p className='uppercase text-[#45CD45] text-[18px] font-[700]'>Hizbullah</p>
                    </NavLink>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-[#45CD45] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={handleToggle}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={toggle === false ? 'hidden w-full md:block md:w-auto' : 'w-full md:block md:w-auto'} id="navbar-default" ref={wrapperRef}>
                        <ul className="flex lg:flex-rows flex-col items-center text-left p-2 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <NavLink>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-[#45CD45] rounded md:bg-transparent md:text-[#45CD45] md:p-0" aria-current="page">Home</p>
                            </NavLink>
                            <NavLink>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0">About Us</p>
                            </NavLink>
                            <NavLink>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0">Blog</p>
                            </NavLink>
                            <NavLink>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0">Contact Us</p>
                            </NavLink>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-[12px] flex items-center justify-between w-24 py-2 pl-3 pr-4 font-medium border-b border-gray-100 text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 md:w-auto" onClick={handleDropDown}> Schools
                                <svg class="mt-[3px] ml-1" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L0.803848 0L11.1962 0L6 9Z" fill="#6D6D6D" />
                                </svg>
                            </button>


                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownNavbar" class={dropDown === false ? "z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "z-10 block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-32 absolute md:right-24 top-56 md:top-96 lg:right-1/3 lg:top-12"}>
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    {/* <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton"> */}
                                    <NavLink>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">ASTC</p>
                                    </NavLink>
                                    <NavLink>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">AMC</p>
                                    </NavLink>
                                    <NavLink>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">HOC</p>
                                    </NavLink>
                                </ul>
                            </div>
                            <div className='block md:block lg:hidden'>
                                <NavLink>
                                    <Button text={'Get Started'} />
                                </NavLink>
                            </div>

                            {/* <NavLink>
                                
                            </NavLink> */}
                        </ul>
                    </div>
                    <div className='hidden md:hidden lg:block'>
                        <NavLink>
                            <Button text={'Get Started'} />
                        </NavLink>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar