/* TODO -add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../API';


export default function Account(){
    const [user, setUser]= useState(null);
    const[token]= useState(JSON.parse(localStorage.getItem('token')));
    const navigate= useNavigate();

    useEffect(()=>{
        (async function(){
            if(!token){
                navigate('/login');
            }
            const loggedUser= await getMe(token);
            setUser(loggedUser);
        })();
    },[token]);
    return(
        <>
            <h3>profile</h3>
            <div>{user && user.firstname}</div>
            <div>{user && user.lastname}</div>             
        </>
    );
}