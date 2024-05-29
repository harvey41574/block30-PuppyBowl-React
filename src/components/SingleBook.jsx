/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getSingleBook } from '../API';
import BookCard from './BookCard';

export default function SingleBook(){
    const {bookId}= useParams();
    const [book, setBook]= useState({});
    

    useEffect(()=>{
        (async function(){
        
            const book= await getSingleBook(bookId);
            
            setBook(book);
        })();
    },[]);
    
    return(
        <BookCard book= {book} />
        
            
        
        
    )
}