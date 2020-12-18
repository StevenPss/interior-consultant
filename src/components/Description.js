import React from 'react'

function Description() {
    return (
      <div className="flex flex-col px-4 mt-3">
        <div className="text-3xl md:text-4xl mb-4">
          <h1 className="font-normal" style={{fontFamily: 'Lora'}}>Modern interior</h1>
        </div>
        <div className="text-sm w-60">
          <p className="font-light mb-3">A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services</p>
            <button
            class="flex font-semibold text-md leading-6 py-2 text-center text-white transition bg-transparent focus:outline-none"
          >
            Read more <svg className="text-white ml-3 h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
          </button>
        </div>
      </div>
    )
}

export default Description
