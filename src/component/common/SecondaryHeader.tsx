import React from 'react';

const SecondaryHeader = () => {


    return (

        <div className="px-10 pt-14 pb-8">
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-3">Our Collection</p>
            <div className="flex items-end justify-between">
                <h1 className="display-font text-7xl font-extrabold leading-none tracking-tight">
                    CRAFT YOUR<br/>
                    <span className="text-[#e8c547]">SIGNATURE</span> PAIR
                </h1>
                <p className="text-gray-400 text-sm max-w-xs text-right leading-relaxed">
                    Every pair is made by hand in our workshop. Pick your base, choose your materials, and wear
                    something that's genuinely yours.
                </p>
            </div>
        </div>
    )
}


export default SecondaryHeader;
