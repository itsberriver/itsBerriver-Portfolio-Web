import logo from '../media/logo.png'
import { FaBars,FaTimes} from 'react-icons/fa';
import React,{useState} from 'react';

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)

    return (
    <div className ='fixed w-full h-[80px] flex justify-between items-center px-4 text-primaryColor' id = 'primaryFont'>
         {/* HAMBURGER */}
        <div onClick = {handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>

        <div>
            <img src={logo} alt="logo" className=' h-[80px] flex justify-between items-center px-4' />
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
        <div className="hidden">

        </div>



    </div>
    );
}

export default Navbar;