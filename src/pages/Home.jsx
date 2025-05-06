import React from 'react'
import { Categories, FeaturedRecipes, Hero } from '../components'

function Home() {
  return (
    <>
        <Hero />
        <Categories />
        <FeaturedRecipes />
    </>
  )
}

export default Home