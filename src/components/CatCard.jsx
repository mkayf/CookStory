import React from 'react'
import { Link } from 'react-router-dom'

function CatCard({name, image, path}) {
  return (
    <Link to={path}>
        <div style={{background : `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1)) 100%, url(${image})`, backgroundSize : 'cover', backgroundPosition : 'center'}} className='rounded-xl flex items-end h-40 sm:h-50 md:h-60 lg:h-70 p-4 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#012f22]'>
            <h5 className='text-sm md:text-xl text-white poppins-regular'>{name}</h5>
        </div>
    </Link>
  )
}

export default CatCard