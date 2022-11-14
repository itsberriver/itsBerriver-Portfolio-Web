import ICONS from '../media/ICONS.png'
import { FaBars} from 'react-icons/fa';

function Navbar() {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300'>
        <div>
            <img src={ICONS} alt="logo" />
        </div>
        
         {/* HAMBURGER */}
        <div>
            <FaBars />
        </div>

         {/* MENU */}
        <ul className=''>
            <li>sobre mi</li>
            <li>proyectos</li>
            <li>contacta</li>
        </ul>

         {/* MOBILE MENU */}
        <ul>    </ul>



    </div>
    );
}

export default Navbar;