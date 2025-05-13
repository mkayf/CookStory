import React, { useEffect, useState } from 'react'
import {Button, Container, HeadingAndLine, PostCard} from './index'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import databaseService from '../services/database';

function FeaturedRecipes() {

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    databaseService.getFeaturedPosts()
    .then((posts) => {
        if(posts) setPosts(posts.documents);
    })
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        setLoader(false);
    })
  }, [])
    

  return (
    <Container>
        <div className='mt-4 md:mt-10'>
            <HeadingAndLine heading='Handpicked Healthy Meals for You' line='Carefully selected to nourish your body and delight your taste buds.' />
            
                {
                    
                    loader ? 
                    (
                        <div className='flex justify-center items-center h-100'>
                           <div className="w-8 h-8 sm:w-16 sm:h-16 border-3 border-gray-950 border-b-transparent rounded-full animate-spin"></div>
                        </div>
                    )
                    :
                    posts.length == 0 ? 
                    <h4 className='text-3xl text-center'>No posts to show</h4>
                    :
                    (
                    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 justify-items-center'>
                    {
                        posts.map((post, i) => (
                            <PostCard key={i} post={post} />
                        ))
                    }
                    </div>
                    )
                }
            
            <div className='flex justify-center'>
                {
                    posts.length !== 0 && <Link to="/allposts">
                    <Button text='View more' className='mt-16 ' icon={<FaArrowRight />} />
                </Link>
                }
            </div>
        </div>
    </Container>
  )
}

export default FeaturedRecipes