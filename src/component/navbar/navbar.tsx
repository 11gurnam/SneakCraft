import React from 'react';

const Navbar = () => {

    return (
        <nav className="flex-1 flex justify-between items-center px-8 py-4">


            <div className="text-xl font-bold tracking-wide">
                SNEAKERCRAFT
            </div>

            <div className="flex items-center gap-x-6">
                <a href="#customizer" className="hover:text-yellow-500 transition">Customize</a>
                <a href="#materials" className="hover:text-yellow-500 transition">Materials</a>
                <a href="#process" className="hover:text-yellow-500 transition">Process</a>
                <a href="#reviews" className="hover:text-yellow-500 transition">Reviews</a>

                <button className="ml-4 bg-yellow-500 text-black px-5 py-2 rounded-full hover:bg-yellow-400 transition">
                    Start Crafting
                </button>
            </div>

        </nav>
    )
}

export default Navbar;
