import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-transparent">
        <div className="flex items-center justify-between px-3 md:px-10 py-3">
          <div className="relative z-50 border border-white uppercase px-1 py-1 text-sm">
            <h5 style={{fontFamily: 'Crimson Pro'}}>This Interior</h5>
          </div>
          <div>
            <button onClick={toggleHamburger} type="button" className="block text-white hover:text-gray-500 focus:text-white focus:outline-none">
              <svg className="relative h-8 w-8 fill-current z-50" viewBox="0 0 24 24">
                {isOpen? 
                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                       :
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                }
              </svg>
            </button>
          </div>
        </div>
        
        <div className="overflow-y-hidden">
          <div className={`absolute w-full h-full z-40 top-0 flex flex-col justify-center bg-black-custom text-center ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-black-  hover:opacity-25">Home</a>
            <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-black-  hover:opacity-25">Collection</a>
            <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-black-  hover:opacity-25">About</a>
            <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-black-  hover:opacity-25">Contact</a>
          </div>
        </div>
      </header>
    )
}

export default Navbar
