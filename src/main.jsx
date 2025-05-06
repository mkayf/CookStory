import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import store from './store/store.js'
import Addpost from './pages/Addpost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
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
                path : 'post/:slug',
                element : <Post />
            },
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
