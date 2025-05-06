import React from 'react'
import {Button, Container, HeadingAndLine, PostCard} from './index'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
function FeaturedRecipes() {

  return (
    <Container>
        <div className='mt-4 md:mt-10'>
            <HeadingAndLine heading='Handpicked Healthy Meals for You' line='Carefully selected to nourish your body and delight your taste buds.' />
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 justify-items-center'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='flex justify-center'>
                <Link to="/allposts">
                    <Button text='View more' className='mt-16 ' icon={<FaArrowRight />} />
                </Link>
            </div>
        </div>
    </Container>
  )
}

export default FeaturedRecipes