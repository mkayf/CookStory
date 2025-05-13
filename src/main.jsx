import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import store from './store/store.js'
import Addpost from './pages/Addpost.jsx'
import Post from './pages/Post.jsx'
import Allposts from './pages/Allposts.jsx'
import Notfound from './pages/Notfound.jsx'
import Editpost from './pages/Editpost.jsx'
import Category from './pages/Category.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        errorElement : <Notfound />,
        children : [
            {
                path : '',
                element : <Home />
            },
            {
                path : 'signup',
                element : <Signup />
            },
            {
                path : 'login',
                element : <Login />
            },
            {
                path : 'addpost',
                element : <Addpost />
            },
            {
                path : 'post/:id',
                element : <Post />
            },
            {
                path : 'posts',
                element : <Allposts />
            },
            {
                path : 'editpost/:id',
                element : <Editpost />
            },
            {
                path : 'category',
                element : <Navigate to='/category/breakfast' />
            },
            {
                path : 'category/:category',
                element : <Category />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
