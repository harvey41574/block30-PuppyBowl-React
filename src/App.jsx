import { useState } from 'react'
import bookLogo from './assets/books.png'
import SingleBook from './components/SingleBook'
import Account from './components/Account'
import Navigation from './components/Navigations'
import Register from './components/Register'
import Books from './components/Books'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import BookCard from './components/BookCard'
function App() {
  const [token, setToken] = useState(null)

  return (
    <>  
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path= '/' element={<Books />}/>
        <Route path= '/book/:bookId' element={<SingleBook />}/>
        <Route path= '/register' element={<Register />}/>
        <Route path= '/account' element= {<Account />}/>
        <Route path= '/navigation' element= {<Navigation />}/>
        <Route path= '/login' element= {<Login />}/>
        
        
        
        
        
        
        </Routes>     
      </BrowserRouter>

    </>
  )
}

export default App
