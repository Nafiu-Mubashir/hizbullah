import React, {  useState } from 'react';
// useRef,
import { NavLink,  } from 'react-router-dom';
// useMatch, useResolvedPath
import { Button } from './Button';

const Navbar = ({to}) => {
    const [toggle, setToggle] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleDropDown = () => {
        setDropDown(!dropDown)
        console.log(dropDown);
    }
    const mobile = () => {
        setToggle(false)
    }

    // const useOutsideAlerter = (ref) => {
    //     useEffect(() => {
    //         const handleClickOutside = (event) => {
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 setToggle(false);
    //                 setDropDown(false)
    //             }
    //         };

    //         document.addEventListener('mousedown', handleClickOutside);
    //         return () => {
    //             document.removeEventListener('mousedown', handleClickOutside);
    //         };
    //     }, [ref]);
    // };


    // const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef);
//     let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='fixed top-0 z-50 w-full'>

            <nav className="w-screen bg-white border-gray-200 sm:px-4 shadow">
                <div className="container flex flex-wrap items-center justify-between mx-auto lg:w-[90%] p-2">
                    <NavLink to='/'>
                        <p className='uppercase text-[#45CD45] text-[16px] font-[700]'>Al-Kawthar Foundation</p>
                    </NavLink>
                    <button className='lg:hidden h-full' onClick={handleToggle}>
                                {
                                    toggle ?
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.9783 0.720459H5.75363C2.99221 0.720459 0.753632 2.95903 0.753632 5.72046V28.7205C0.753632 31.4819 2.99221 33.7205 5.75363 33.7205H28.9783C31.7397 33.7205 33.9783 31.4819 33.9783 28.7205V5.72046C33.9783 2.95904 31.7397 0.720459 28.9783 0.720459Z" fill="#45CD45" />
                                            <path d="M9.7272 12.4191L25.7253 25.8431C25.9182 26.005 26.1709 26.0795 26.4278 26.0502C26.6847 26.021 26.9248 25.8904 27.0953 25.6873C27.2658 25.4841 27.3526 25.225 27.3368 24.9669C27.321 24.7088 27.2037 24.4729 27.0109 24.3111L11.0128 10.887C10.8199 10.7252 10.5672 10.6507 10.3103 10.6799C10.0534 10.7092 9.81327 10.8397 9.6428 11.0429C9.47232 11.2461 9.38544 11.5052 9.40126 11.7633C9.41709 12.0214 9.53433 12.2573 9.7272 12.4191Z" fill="#FDFCFF" />
                                            <path d="M25.7253 11.1567L9.72719 24.5807C9.53433 24.7426 9.41708 24.9785 9.40126 25.2366C9.38543 25.4947 9.47231 25.7538 9.64279 25.957C9.81327 26.1601 10.0534 26.2907 10.3103 26.3199C10.5672 26.3491 10.8199 26.2747 11.0128 26.1128L27.0109 12.6888C27.2037 12.527 27.321 12.2911 27.3368 12.033C27.3526 11.7749 27.2658 11.5158 27.0953 11.3126C26.9248 11.1094 26.6847 10.9789 26.4278 10.9496C26.1708 10.9204 25.9182 10.9949 25.7253 11.1567Z" fill="#FDFCFF" />
                                        </svg>
                                        :
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.9783 0.720459H5.75363C2.99221 0.720459 0.753632 2.95903 0.753632 5.72046V28.7205C0.753632 31.4819 2.99221 33.7205 5.75363 33.7205H28.9783C31.7397 33.7205 33.9783 31.4819 33.9783 28.7205V5.72046C33.9783 2.95904 31.7397 0.720459 28.9783 0.720459Z" fill="#45CD45" />
                                            <path d="M28.2826 15.7205H7.39856C7.14679 15.7205 6.90534 15.8258 6.72732 16.0134C6.54929 16.2009 6.44928 16.4552 6.44928 16.7205C6.44928 16.9857 6.54929 17.24 6.72732 17.4276C6.90534 17.6151 7.14679 17.7205 7.39856 17.7205H28.2826C28.5344 17.7205 28.7758 17.6151 28.9539 17.4276C29.1319 17.24 29.2319 16.9857 29.2319 16.7205C29.2319 16.4552 29.1319 16.2009 28.9539 16.0134C28.7758 15.8258 28.5344 15.7205 28.2826 15.7205Z" fill="#FDFCFF" />
                                            <path d="M7.39856 9.72046H28.2826C28.5344 9.72046 28.7758 9.6151 28.9539 9.42757C29.1319 9.24003 29.2319 8.98568 29.2319 8.72046C29.2319 8.45524 29.1319 8.20089 28.9539 8.01335C28.7758 7.82582 28.5344 7.72046 28.2826 7.72046H7.39856C7.14679 7.72046 6.90534 7.82582 6.72732 8.01335C6.54929 8.20089 6.44928 8.45524 6.44928 8.72046C6.44928 8.98568 6.54929 9.24003 6.72732 9.42757C6.90534 9.6151 7.14679 9.72046 7.39856 9.72046Z" fill="#FDFCFF" />
                                            <path d="M28.2826 23.7205H7.39856C7.14679 23.7205 6.90534 23.8258 6.72732 24.0134C6.54929 24.2009 6.44928 24.4552 6.44928 24.7205C6.44928 24.9857 6.54929 25.24 6.72732 25.4276C6.90534 25.6151 7.14679 25.7205 7.39856 25.7205H28.2826C28.5344 25.7205 28.7758 25.6151 28.9539 25.4276C29.1319 25.24 29.2319 24.9857 29.2319 24.7205C29.2319 24.4552 29.1319 24.2009 28.9539 24.0134C28.7758 23.8258 28.5344 23.7205 28.2826 23.7205Z" fill="#FDFCFF" />
                                        </svg>
                                }
                            </button>
                   <div className={toggle ? 'relative rounded-none shadow-none lg:bg-transparent flex flex-col lg:flex-row items-left mt-5 p-5 w-full h-full text-center justify-evenly text-[#004] text-[22px]' : 'hidden lg:flex md:hidden items-center w-[70%] h-full justify-between text-[#004]'}>

                    <ul className="flex lg:flex-rows flex-col items-left text-left p-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <NavLink to={'/'}>
                                <p className={`block py-2 pl-3 pr-4 text-[12px] text-[#45CD45] rounded md:bg-transparent md:text-[#45CD45] md:p-0`} aria-current="page" onClick={mobile}>Home</p>
                            </NavLink>
                            <NavLink to={'/about'}>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0" onClick={mobile}>About Us</p>
                            </NavLink>
                            <NavLink to={'/blog'}>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0" onClick={mobile}>Blog</p>
                            </NavLink>
                            <NavLink to={'/contact'} className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                                <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0" onClick={mobile}>Contact Us</p>
                            </NavLink>
                            <button className="text-[12px] flex items-center justify-between w-24 py-2 pl-3 pr-4 font-medium border-b border-gray-100 text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 md:w-auto" onClick={handleDropDown}> Schools
                                <svg class="mt-[3px] ml-1" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L0.803848 0L11.1962 0L6 9Z" fill="#6D6D6D" />
                                </svg>
                            </button>


                            <div className={dropDown === false ? "z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44" : "z-50 block font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-32 absolute md:right-24 top-56 md:top-96 lg:right-1/3 lg:top-12"}>
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
                                    <a href='https://astc.sch.ng/' target='blank'>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">ASTC</p>
                                    </a>
                                    <a href='https://alkawtharmodelcollege.com/' target='blank'>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">AMC</p>
                                    </a>
                                    <NavLink to={'/'}>
                                        <p className="block py-2 pl-3 pr-4 text-[12px] text-gray-700 rounded md:border-0 md:hover:text-[#45CD45] md:p-0 text-left lg:text-center">HOC</p>
                                    </NavLink>
                                </ul>
                            </div>
                            <div className='block md:block lg:hidden'>
                                <NavLink>
                                    <Button text={'Get Started'} />
                                </NavLink>
                            </div>
                        </ul>
                        <div className='hidden md:hidden lg:block'>
                                <NavLink>
                                    <Button text={'Get Started'} />
                                </NavLink>
                            </div>
                        </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar