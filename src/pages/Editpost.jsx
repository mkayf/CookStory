import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PostForm, Container } from '../components';
import databaseService from '../services/database';

function Editpost() {

 const {id} = useParams();
 const [post, setPost] = useState(null);
 const navigate = useNavigate();

 useEffect(() => {
    if(id){
        databaseService.getPost(id)
        .then((post) => {
            if(post){
                setPost(post);
            }
            else{
                navigate('/');
            }
        })    
    } 
    else{
        navigate('/');
    }
 }, [id, navigate])


  return post ? (
    <Container>
        <h1 className='text-2xl md:text-4xl poppins-semibold'>Edit post</h1>
        <div className='my-10'>
            <PostForm post={post} />
        </div>
    </Container>
  )
  :
  null
}

export default Editpost