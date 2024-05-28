/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useState,useEffect } from "react";
import { getAllBooks } from '../API'
import BookCard from "./BookCard";
export default function Books(){
    const [books, setBooks]= useState([]);
    

    useEffect(()=>{
        (async function(){
            const books= await getAllBooks();
            setBooks(books);
    })();
    },[]);
    
return(
    <>
     <div className="flex flex-col justify-center bg-blue-100">
      <div className="grid sm:grid-cols-2 md:grid cols-3 lg:grid-cols-4 px-10">
        {
          books.map((book)=>{
            return(
             <BookCard
                key={book.id}
                book={book}
                />
            );
    })}
      </div>


     </div>
    
    </>
)
}