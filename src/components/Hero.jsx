import React from 'react'
import {Button} from './index'
import HeroImg1 from '../assets/hero-img.jpg'
import HeroImg2 from '../assets/hero-img-2.jpg'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className='w-full h-[400px] md:h-[550px] bg-[#012f22] flex flex-col  justify-center md:flex-row items-center gap-14 px-6 md:px-12 md:pb-20'>
      <div className='flex-1/12 flex items-start justify-center flex-col'>
        <h1 className='text-white poppins-semibold text-3xl md:leading-12 lg:text-5xl lg:leading-16'>Fuel Your Body with Easy & Healthy Recipes!</h1>
        <p className='text-white poppins-regular leading-7 mt-4'>Explore a world of easy-to-make, nutritious recipes that bring health and happiness to your plate.</p>
        <Link to="posts">
          <Button text='Browse Recipes' className='mt-4'  />
        </Link>
      </div>
      <div className='flex-1 relative hidden md:flex h-70 lg:h-100'>
        <img src={HeroImg2} className='h-full rounded-xl shadow-xl object-cover relative z-10' alt='A woman cooking healthy food'/>
        <img src={HeroImg1} className='h-full rounded-xl shadow-2xl absolute left-25 -bottom-10 lg:left-45' alt='Healthy food cooking'/>
      </div>
    </div>
  )
}

export default Hero