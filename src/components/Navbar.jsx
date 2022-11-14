import logo from '../media/logo.png'
import { FaBars,FaTimes,FaGithub, FaLinkedin,} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


import React,{useState} from 'react';

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)

    return (
    <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 text-primaryColor' id = 'primaryFont'>
        <div>
            <img src={logo} alt="logo" className=' h-[80px] flex justify-between items-center px-4' />
        </div>

         {/* HAMBURGER */}
        <div onClick = {handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>

         {/* MENU */}
            <ul className='hidden md:flex'>
                <li>proyectos</li>
                <li>sobre mi</li>
                <li>contacta</li>
            </ul>

         {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-secondaryColor flex flex-col justify-center items-center'}>    
            <li className='py-6 text-4xl'> proyectos </li>
            <li className='py-6 text-4xl'> sobre mi </li>
            <li className='py-6 text-4xl'> contacta </li>
        </ul>

        {/* SOCIAL ICONS */} 
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a href="/" className='flex justify-between ml-2 items-center w-full text-primaryColor'> 
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a href="/" className='flex justify-between ml-2 items-center w-full text-primaryColor'> 
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a href="/" className='flex justify-between ml-2 items-center w-full text-primaryColor'> 
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
                    <a href="/" className='flex justify-between ml-2 items-center w-full text-primaryColor'> 
                        Mail <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>



    </div>
    );
}

export default Navbar;