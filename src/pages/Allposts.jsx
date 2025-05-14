import React, { useEffect, useState } from 'react'
import databaseService from '../services/database';
import { Container, PostCard, Button } from '../components';
import { useNavigate } from 'react-router-dom';
function Allposts() {

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true)
      databaseService.getAllPosts().then((posts) => {
        if(posts){
            setPosts(posts.documents);
        }
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      setLoader(false);
    })
    
  }, []);
    


  return <Container className='justify-center items-center'>
    
    {
      loader ? 
      (
       <div className='flex justify-center items-center h-100'>
        <div className="w-8 h-8 sm:w-16 sm:h-16 border-3 border-gray-950 border-b-transparent rounded-full animate-spin"></div>
       </div>
      )
      :
      posts.length == 0 ? 
      (<div className='flex justify-center flex-col items-center h-100'>
        <h1 className='poppins-semibold text-md md:text-3xl'>No posts to show</h1>
        <p className='poppins-regular text-[#4B4B4B] text-lg'>Post some blogs to be the first one.</p>
        <div className='flex justify-center mt-4'>
         <Button type='button' text='Post a blog' onClick={() => navigate(`/addpost`)} />
        </div>
      </div>)
      :
      (
        <div>
          <h1 className='poppins-semibold text-md md:text-3xl'>Explore recipes</h1>
          <div className='my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 justify-items-center'>
          {
            posts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))
          }
          </div>
        </div>
        
      )
    }
  </Container>
}

export default Allposts