import React from 'react'
import { PostForm, Container } from '../components'

function Addpost() {
  return (
    <Container>
        <h1 className='text-2xl md:text-4xl poppins-semibold '>Write a new post</h1>
        <div className='my-10'>
            <PostForm />
        </div>
    </Container>
  )
}

export default Addpost