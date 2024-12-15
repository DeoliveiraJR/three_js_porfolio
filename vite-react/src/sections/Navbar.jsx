import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90  ">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-white-500 font-bold text-2xl hover:text-white transition-colors">
                        DevOJr 
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;