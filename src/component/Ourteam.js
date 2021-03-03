import React from 'react'
import Imageslider from './Imageslider'
import usersData from './userData'

const Ourteam = () => {

    return (
        <div className="bg-white">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                <path 
                    fill="#6c63ff" 
                    fillOpacity="1" 
                    d="M0,96L40,80C80,64,160,32,240,26.7C320,21,400,43,480,80C560,117,640,171,720,170.7C800,171,880,117,960,96C1040,75,1120,85,1200,117.3C1280,149,1360,203,1400,229.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                </path>
            </svg>

            <div className="min-h-screen flex justify-around items-center ">
                <div className="w-full mx-auto">
                    <div className="text-center font-semibold border-black">
                        <h1 className="text-5xl my-10">
                            <span>Our</span>
                            <span className="text-blue-700 tracking-wide"> Team</span>
                        </h1>
                    </div>

                    <Imageslider users={usersData}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Ourteam
