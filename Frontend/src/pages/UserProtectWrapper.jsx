import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
const UserProtectWrapper = ({
    children // this will get the children from the component that is wrapped by this component
}) => {

         // this will get the navigate function from the react-router-dom
       const token=localStorage.getItem('token') 
       const navigate = useNavigate()
         const {user,setUser}=useContext(UserDataContext)
        const [isLoading,setIsLoading] = useState(true);  // isLoading is the initial state
       const [error,setError] = useState(null); // this will get the token from the local storage
       console.log(token)  
       
       useEffect(() => {
         if (!token) { // this will check if the user is not logged in
              navigate('/UserLogin') // this will redirect the user to the login page
         }
       }, [token])
    //    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
    //     headers:{
    //         'Authorization':`Bearer ${token}`
    //     }
    // }).then(response=>{
    //     if(response===200){
    //         setUser(response.data.user)
    //         setIsLoading(false)
    //     }
        
    // }
    // ).catch(error=>{

    //     console.log(error)
    //     localStorage.removeItem('token')
    //     navigate('/UserLogin')
    // })

    // if(isLoading){
    //     return <div>Loading...</div>
    // }
       
  return (
   <>
   {children}  
   </>
  )
}

export default UserProtectWrapper
