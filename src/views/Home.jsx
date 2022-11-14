import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
    return (
    <div name='home' className='w-full h-screen'>
        {/* CONTAINER */ }
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className='text-primaryColor text-4xl sm:text-7xl' id='secondaryFont'>Holi! Soy Jess</h1>
            <p className='py-4 max-w-[700px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Elementum vitae cursus et turpis lectus feugiat massa proin mollis.
                 Vel tristique justo, varius dolor felis sem arcu. Aliquet volutpat diam, 
                 egestas tempor at. Aliquet at neque, egestas condimentum.
            </p>
            <div>
                <button id ='primaryFont' className='group px-40 py-3 my-2 flex  items-center hover:underline'>
                    seguir viendo 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                 </button>
            </div>
        </div>

        

        
    </div>
    );
}

export default Home;