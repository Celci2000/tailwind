import React from 'react'

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px]  mt-[96px] flex justify-center items-center flex-col mx-auto "> 
    <p className=" text-[#00df9a] font-bold text-xl sm:text-2xl md:text-4xl ">GROWING WITH DATA ANALYTICS</p>
      <h1 className="font-bold text-xl sm:text-2xl md:text-5xl md:py-4" >Grow with Data</h1>
      
      <p className='font-bold text-xl sm:text-2xl md:text-3xl md:py-4 '> Fast,Flexible financing for </p>
     {/* <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                /> */}
                <button className="bg-[#00df9a]  hover:-translate-y-1 hover:scale-110 ... hover:bg-green-200 transition duration-500 ease-in-out text-black  rounded m-4 py-2 px-4 font-bold"> Get started</button>
      </div>
      
    </div>
  )
}

export default Hero

