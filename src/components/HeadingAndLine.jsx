import React from 'react'

function HeadingAndLine({heading = '', line = ''}) {
  return (
    <>
        <h1 className="text-2xl md:text-4xl text-center poppins-semibold">
          {heading}
        </h1>
        <p className="text-sm md:text-lg text-center poppins-regular text-[#4B4B4B] mt-4">
          {line}
        </p>
    </>
  )
}

export default HeadingAndLine