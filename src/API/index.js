

const BASEURL= 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export async function register(userData){
    try{
        const response= await fetch(`${BASEURL}/users/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             firstname: userData.first_name,
             lastname: userData.last_name,
             email: userData.email,
             password: userData.password,
            }),
            });
            const result= await response.JSON();
             if(result.token){
                localStorage.setItem('token',JSON.stringify(result.token));
                return result;
             }
        }catch(error){}    

    }

    export async function getMe(token){
        try{
            const response= await fetch(`${BASEURL}/users/me`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const result= await response.json();
    
            return result;
        } catch(error){
            console.log(error);
        }
    }

export async function getAllBooks(){
    try{
        const response= await fetch(`${BASEURL}/books`);
        const result= await response.json();
    return result.books
    }catch(error){
        console.log(error);
    }
}

export async function getSingleBook(id){
  try{
    const response= await fetch(`${BASEURL}/books/${id}`);
    const result= await response.json();
    return result.book;
  }catch(error){
    console.log(error);
  }
}




    
