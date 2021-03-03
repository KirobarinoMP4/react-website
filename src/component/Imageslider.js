import React, { useState } from 'react'

import usersData from './userData'
import leftArrow from '../image/left-arrow.svg'
import rightArrow from '../image/right-arrow.svg'

const Imageslider = ({ users }) => {
    const [current, setCurrent] = useState(0);
    const length = users.length;
    
    if(!Array.isArray(users) || users.length <= 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    console.log(current)

    return (
        <section className="pt-24 p-4 flex flex-row justify-around items-center relative">
            <img 
                src={leftArrow}
                alt="left arrow"
                className="w-8 mx-2 cursor-pointer"
                onClick={prevSlide}
            />

            <div className="cards-slider">
                <div className="cards-slider-wrapper" style={{
                    transform: `translateX(-${(current)*(100/length)}%)`
                }}>
                    {usersData.map(user => {
                        return (
                            <div className={'card'} key={user.id}>
                                <img 
                                src={user.photo}
                                alt={user.name}
                                className="h-30 rounded-lg border mx-auto"
                                />
                                <hr className="mt-4 border-1"></hr>
                                <div className="pt-8">
                                    <h4 className="font-bold text-gray-400 ">
                                        <p className="text-black">{user.name}</p>
                                        <span className="">{user.role}</span>
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <img 
                src={rightArrow}
                alt="right arrow"
                className="w-8 mx-2 cursor-pointer"
                onClick={nextSlide}
            />
        </section>
    )
}

export default Imageslider
