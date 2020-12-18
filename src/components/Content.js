import React from 'react'
import Image1 from '../static/photo1.png';
import Image2 from '../static/photo2.png';

function Content() {
    return (
      <div className="flex md:w-2/4 mt-3">
        <div className="px-3">
          <img className="rounded-md" src={Image1} alt="room"/>
          <div className="relative md:flex items-end md:right-52 w-80 bottom-12">
            <div className="bg-black-custom absolute right-0 lg:w-72 py-4 px-4 shadow-lg">
              <div className="flex">
                <img className="rounded-full h-10 w-10" src={Image2} alt="aliza webber"/>
                <div className="flex flex-col ml-3 font-medium">
                  <h5 className="text-sm">Aliza Webber</h5>
                  <p className="text-gray-500 text-xs">Interior designer</p>
                </div>
              </div>
              <h1 className="mt-3 font-bold text-lg w-48 mb-2" style={{fontFamily: 'Lora'}}>Designed in 2020 by Aliza Webber</h1>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Content
