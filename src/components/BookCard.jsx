import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function BookCard({book}){
  const navigate= useNavigate();
  function handleClick(){
    navigate(`/book/${book.id}`)
  }
    return(
        <>
         <div className='bg-white shadow-md rounded-lg px-10 py-10'>
           <img
             src={book.coverimage}
             alt={book.title}
             className='rounded-md'
             />
            <div className='int-4'>
                <h1 className='text-lg uppercase font-bold'>
                    {book.title}
                </h1>
                <p className='int-2 text-gray-600 text-sm'>
                    {book.description}
                </p>
                <button
                  onClick= {handleClick}
                  className='px-4 py-2 bg-gray-800 text-white text-xs uppercase rounded hover:bg-gray-700 mt-2'
                  >
                    details
                  </button>
                  <button
                  onClick= {handleClick}
                  className='px-4 py-2 bg-gray-800 text-white text-xs uppercase rounded hover:bg-gray-700 ml-10 mt-2'
                  >
                    checkout
                  </button>



            </div>
       </div>
        </>
    )

}