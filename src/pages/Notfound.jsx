import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
            <h1 className="text-9xl poppins-bold text-[#788d4d] animate-pulse">
                4<span className="text-[#A8C66C]">0</span>4
            </h1>
            <h2 className="mt-6 text-2xl poppins-semibold text-gray-800">
                Oops! Page Not Found
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto poppins-regular">
                The page you're looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
            </p>

            <div className="mt-8">
                <Link to="/"
                   className="inline-flex items-center px-6 py-3 border border-transparent 
                          text-base poppins-medium rounded-md text-black bg-[#A8C66C]
                          hover:bg-[#829954] transition-colors duration-200
                          shadow-lg hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         className="h-5 w-5 mr-2" 
                         viewBox="0 0 20 20" 
                         fill="currentColor">
                        <path fillRule="evenodd" 
                              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                              clipRule="evenodd"/>
                    </svg>
                    Go Back Home
                </Link>
            </div>
            <div className="mt-12 opacity-25">
                <svg className="w-24 h-24 mx-auto" 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Notfound