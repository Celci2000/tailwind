import React ,{useState} from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
function Navbar() {
  const [close, setClose] =useState(false)
  function toggle(){
  setClose(prev=>!prev)
  console.log(close)
 
  }
  return (
    <div className="flex  justify-between  text-white">
        <h1 className="w-full px-10 py-1 text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="  hidden md:flex">
         
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">Company</li>
            <li className="p-4 cursor-pointer">Resources </li>
            <li className="p-4 cursor-pointer">About&nbsp;Us</li>	

            <li className="p-4">Contact</li>
        </ul>
        <div className="  md:hidden"> 
          <button  className="m-4 fixed right-0 "onClick= {toggle}>  { close ? <AiOutlineClose />:<AiOutlineMenu/>}</button>
          {close && ( <ul className=" bg-black fixed mt-12 left-0 top-0 w-80  ease-in-out duration-500 ">
          
  
    <li className="p-4 px-12 border-b-2  border-gray-600 uppercase cursor-pointer hover:bg-gray-400 hover:border-l-4 hover:text-black">home</li>
    <li className="p-4 px-12 border-b-2  border-gray-600 uppercase cursor-pointer hover:bg-gray-400 hover:border-l-4  hover:text-black">company</li>
    <li className="p-4 px-12  border-b-2  border-gray-600 uppercase cursor-pointer hover:bg-gray-400 hover:border-l-4  hover:text-black">Resources </li>
    
    <li className="p-4 border-b-2 px-12  border-gray-600 uppercase cursor-pointer hover:bg-gray-400 hover:border-l-4  hover:text-black">AboutUs</li>	

    <li className="p-4  border-b-2 px-12  border-gray-600  uppercase  hover:bg-gray-400 hover:border-l-4  hover:text-black">Contact</li>
</ul>)
  }
         
        </div>
    </div>
  )
}

export default Navbar
