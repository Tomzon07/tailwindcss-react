import React, { useEffect, useState } from 'react';
import logo from "../assets/Icon.png"
import Arrow from "../assets/Vector.png"
import { FaXmark,FaBars } from "react-icons/fa6"

import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const [isSticky,setIsSticky]=useState(false)

    // set toggle menu

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>100){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }

        }
        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.addEventListener('scroll',handleScroll)
        }
    });

    //navItems array

    const navItems =[
        {link:'Home',path:"home" },
        {link:'Features',path:"Features" },
        {link:'Community',path:"Community" },
        {link:'Blog',path:"Blog" },
        {link:'Pricing',path:"Pricing" }

    ]


    return (
            <header className='w-full bg-white md:bg-transparent fixed top-0 right-0 left-0'>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                    <div className='flex justify-center items-center text-base gap-8'>
                        <a href='/home' className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt='' className='w-10 inline-block items-center' />
                        <span className='text-[#263238]'>
                        TMZN
                        </span>
                        </a>

                     {/*Nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden '>
                        {
                            navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-brandPrimary first:font-small'>{link}</Link> )
                        }

                    </ul>

                     {/*Button for large devices */}
                     <div className='space-x-12 hidden lg:flex items-center'>
                        <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>
                            Login
                        </a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded-[2px] hover:bg-neutralDGrey flex items-center gap-2 '>
                            Register Now
                            <span><img src={Arrow} alt='arrow' /></span>
                        </button>
                        </div>   

                     {/*Button for mobile devices */}

                     <div className='md:hidden'>
                        <button className='focus:outline-none focus:text-gray-500 text-neutralDGrey' onClick={toggleMenu}>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>):(<FaBars className='h-6 w-6 text-neutralDGrey'/>)
                            }
                        </button>
                     </div>


                   
                   
                    </div>

                    {/** Nav items for mobile devices */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ?"block fixed top-0 right-0 left-0" :" hidden"}`}>
                    {
                            navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-small'>{link}</Link> )
                        }

                    </div>
                </nav>


            </header>
    );
};

export default Navbar;