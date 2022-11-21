import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import aboutMe_Illustration from '../media/aboutMe_Illustration.png'



const AboutMe = () => {
  return (
      <div className='flex flex-row w-full h-screen'>
        <div name='about' className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full'>
                    <div className='pb-8 pl-20' id="secondaryFont">
                        <p className='text-7xl '>
                        SOBRE MI
                        </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-2 px-40'>
                    <div>
                        <p>
                            Holi! Soy Jess, una chica que se mueve por sus ganas de aprender, por su pasión por el código, la ilustración, el diseño y las cosas cuquis. Con personalidad creativa, positiva y risueña. Me verás siempre con un café en la mesa o con mi perrita encima mío. 
                            
                            Nacida en Colombia, residiendo en España y soñando con visitar algún día Corea del Sur.
                            Programadora full-stack junior, formada en un bootcamp full-stack de 850h, también diseñadora gráfica e ilustradora. Organizada, trabajadora , apostando por dar siempre lo mejor de mí y con tantas ansias de aprender que llegué incluso a estudiar dos cosas a la vez. Me verás siempre ocupada con un nuevo hobby, con un algún proyecto, algún curso o en alguna charla o evento.

                            Quiero crecer profesional y personalmente, tomar nuevos retos, contagiar buen ambiente, ayudar a las personas mediante mi trabajo y continuar aprendiendo.
                        </p>  
                        <div>
                            <button id ='primaryFont' className='group px-30 py-3 my-2 flex items-center hover:underline'>
                                ver proyectos
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3'/>
                                </span>
                            </button>
                        </div>
                    </div>
        <img src={aboutMe_Illustration} alt="an illustration of me" className='w-[50rem] h-[100%]'/>
                </div>
            </div>
        
        </div>

    </div>
  );
};

export default AboutMe;
