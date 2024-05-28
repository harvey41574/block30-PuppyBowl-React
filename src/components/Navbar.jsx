import { useState } from "react";
import { Link } from "react-router-dom"
export default function Navbar(){
  const [loggedIn, setLoggedIn] = useState(false);

    return(
      <>
      <div className='flex flex-col justify-center bg-blue-500'>
        <div className='flex justify-between items-center px-20 py-5'>
          <h1 className='text-6xl uppercase font-bold mt-10 flex justify-center items-center gap-100 text-gray-100 mb-10'
           >
              BOOK BUDDY</h1>
      </div>
          <div className="flex justify-between items-center px-20 py-5 gap-5">
          <Link to= '/' className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
               >
                  home
                    </Link>
                    <Link to= '/account' className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
               >
                  profile
                    </Link>
               
                    <Link to= '/register' className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
               >
                  register
                    </Link>
                      {loggedIn ? (
                        <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                          >
                          Log Out 
                             </button>
                      ):
                            (
                              <>
                          <Link to='/login' className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                           >
                            Log In
                          </Link>
                          </>
                          )
                        }
                    
                 </div>
              </div>          
             </>
         )                  
      }            
                 
     
          
           
            
          
      
    
    
