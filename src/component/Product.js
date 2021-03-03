import React from 'react'

import Learning from './Learning'
import productImage from '../image/Foto produk.jpeg'
import leafletIcon from '../image/leaflet.png'
import componentIcon from '../image/component.png'
import lintasanIcon from '../image/lintasan.png'

const Product = () => {
    return (
        <div className="bg-primary py-10">
            <h1 className="text-2xl font-bold tracking-widest text-white uppercase text-center mb-20">Our Product</h1>

            {/* Cards Product */}
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative bg-white shadow-lg sm:rounded-3xl">
                    <div className="">
                    <div>
                        <img src={productImage} className="rounded-lg" alt="products"/>
                    </div>
                    
                    <div className="py-10 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                        <p className="text-center">Line Follower learning kit</p>
                        <p className="text-center">
                            <a href="https://shopee.co.id/kirobarino4.0" className="text-cyan-600 hover:text-cyan-700"> Beli sekarang &rarr; </a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <h4 className="text-xl font-bold text-white uppercase mt-20 w-1/12 mx-auto text-center border-b-4">Includes</h4>

            <div className="mt-10 container bg-white mx-auto rounded-xl p-5 justify-around flex lg:flex-row flex-col">
                <div className="m-5">
                    <img 
                        src={leafletIcon} 
                        alt="leaflet"
                        className="h-40 mx-auto"
                    />
                    <p className="font-semibold text-center">Leaflet panduan perakitan</p>
                </div>
                <div className="m-5">
                    <img 
                        src={componentIcon}
                        alt="component"
                        className="h-40 mx-auto"
                    />
                    <p className="font-semibold text-center">Komponen Robot</p>
                </div>
                <div className="m-5">
                    <img 
                        src={lintasanIcon}
                        alt="component"
                        className="h-40 mx-auto"
                    />
                    <p className="font-semibold text-center">Lintasan</p>
                </div>
            </div>

            <h1 className="text-2xl font-bold tracking-widest text-white uppercase text-center m-20">Learning</h1>

            <Learning />

            
        </div>
    )
}

export default Product
