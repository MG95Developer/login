import React from 'react'
import Logotype from '../assets/img/your-logo.jpeg'

const Hero = () =>
{
    return (
        <>
            {/* IPHONES: add class py-16 to the parent div */}
            <div className='max-w-[1240px] mx-auto text-center text-4xl md:text-5xl lg:text-6xl'>

                <div className="flex flex-col justify-center items-center h-screen">
                    <div className='mb-10'>
                        <img src={Logotype} className='mx-auto py-10 w-[130px] md:w-[180px] lg:w-[220px] ' />
                        <h1 className='pb-6'>companyName</h1>
                        <h4 className='my-5 text-2xl font-400'>Welcome to companyName!</h4>
                        <h5 className='text-2xl md:text-3xl font-bold'>Login into your account:</h5>
                    </div>

                    <div className='mt-6 pt-10'>
                        <form>
                            <input className='text-2xl block mx-auto px-4 rounded-full mb-4 w-[280px] md:w-[450px] h-[50px]' placeholder='Enter Username' />
                            <input className='text-2xl block mx-auto px-4 rounded-full w-[280px] md:w-[450px]  h-[50px]' placeholder='Enter Password' />
                            <button className='text-2xl block mx-auto bg-gray-600 text-white w-[280px] md:w-[450px] h-[60px] mt-8 rounded-full uppercase'>Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero