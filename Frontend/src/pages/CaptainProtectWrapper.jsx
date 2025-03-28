import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainProtectWrapper = ({
    children // this will get the children from the component that is wrapped by this component
}) => {

         // this will get the navigate function from the react-router-dom
       const token=localStorage.getItem('token') 
       
       const navigate = useNavigate()
       const {captain,setCaptain}=useContext(CaptainDataContext)
        //   const [isLoading,setIsLoading] = useState(true);  // isLoading is the initial state
          // const [error,setError] = useState(null);  // error is the initial state
        // this will get the token from the local storage
       console.log(token)  
       
       
       useEffect(() => {
         if (!token) { // this will check if the user is not logged in
              navigate('/CaptainLogin') // this will redirect the user to the login page
         }
       }, [token])
    //   axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    //     headers:{
    //         'Authorization':`Bearer ${token}`
    //     }
    // }).then(response=>{
    //     if(response===200){
    //         setCaptain(response.data.captain)
    //         setIsLoading(false)
    //     }
        
    // }
    // ).catch(error=>{

    //     console.log(error)
    //     localStorage.removeItem('token')
    //     navigate('/CaptainLogin')
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

export default CaptainProtectWrapper
