import React from 'react'
import onlineLearnill from '../image/undraw_Online_learning_re_qw08.svg'

const Hero = () => {
    return (
        <div className="mt-8">
            <div className="container mx-auto px-4 lg:flex lg:flex-row lg:justify-around align-middle">
                {/* Left Coloumn */}
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="text-3xl my-4 font-bold leading-tight mx-auto">
                        an Learning Robotics Kit
                    </h1>
                    <p className="leading-normal text-xl mb-8">
                        Kami berusaha memfasilitasi semua orang untuk belajar, namun tetap merasakan euforia seperti bermain game. Sehingga orang-orang mampu menghabiskan waktu berjam-jam hanya untuk belajar, selayaknya bermain game
                    </p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-primary text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Subscribe
                    </button>
                </div>

                {/* Right Column */}
                <img 
                    src={onlineLearnill} 
                    alt="illustration"
                    className="lg:w-2/5" />
            </div>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                    <path 
                        fill="#6c63ff" 
                        fillOpacity="1" 
                        d="M0,192L40,186.7C80,181,160,171,240,160C320,149,400,139,480,165.3C560,192,640,256,720,261.3C800,267,880,213,960,192C1040,171,1120,181,1200,165.3C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                    </path>
            </svg>
        </div>
    )
}

export default Hero
