import React from 'react'
import "../Main/Main.css"
import { BsCompass } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { RiImageAddLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

function Main() {
  return (
    <div className='main flex-1 min-h-[100vh] relative'>

        <div className="nav flex items-center justify-between text-2xl p-5 text-[#585858]">
            <p>Dhi-An Intellect</p>
            <img src="src\assets\dhi-high-resolution-logo.png" alt="" height={150} width={150}
            className='rounded-3xl w-28'/>
        </div>

        {/* Main Container */}
        <div className="main-container max-w-[900px] m-auto">

            <div className="greet my-12 mx-0 text-5xl text-[#c4c7c5] font-medium p-3">
                <p><span id='gradient'>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>

            <div className="cards grid grid-flow-col gap-6 p-5">
                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-base'>Suggest beautiful places to see on an upcoming road trip</p>
                    <BsCompass className='w-10 h-10 p-2 absolute bg-white rounded-full bottom-3 right-3'/>
                </div>

                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-base'>Briefly summarize this concept : Urban Planning</p>
                    <IoBulbOutline className='w-10 h-10 p-2 absolute bg-white rounded-full bottom-3 right-3'/>
                </div>

                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-base'>Brainstorm team bonding activities for our work retreat</p>
                    <FiMessageCircle className='w-10 h-10 p-2 absolute bg-white rounded-full bottom-3 right-3 font-thin'/>
                </div>

                <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className='text-[#585858] text-base'>Improve the readability of the following code</p>
                    <FaCode className='w-10 h-10 p-2 absolute bg-white rounded-full bottom-3 right-3'/>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto">
                <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] py-2 px-5 rounded-3xl">
                    <input 
                        type="text" 
                        placeholder='Enter a prompt here'
                        className='flex-1 bg-transparent border-none outline-none p-2 text-[18px]'
                    />

                    <div className='flex items-center gap-2'>
                        <RiImageAddLine className='w-8 h-6 cursor-pointer'/>
                        <FaMicrophone className='w-8 h-6 cursor-pointer' />
                        <VscSend className='w-8 h-6 cursor-pointer' />
                    </div>
                </div>

                <p className='bottom-info text-[13px] my-4 mx-auto text-center font-normal'>
                    Dhi may display inaccurate info, including about people, so double-check it's responses. Your privacy and Dhi Apps
                </p>
            </div>

        </div>
    </div>
  )
}

export default Main