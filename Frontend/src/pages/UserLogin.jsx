import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const[password,setPassword]=useState('')
  const[userData,setUserData]=useState({})

   const navigate = useNavigate()
   const { user, setUser } = useContext(UserDataContext)
  const submitHandler=async(e)=>{ 
    
    e.preventDefault()
    const userData ={
      email:email,
      password:password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      if (response.status === 200) {
        const data = response.data
        setUser(data.user)  // this will set the user in the context
        localStorage.setItem('token',data.token)
        console.log(data.token) // this will store the token in the local storage
        navigate('/home')
      }

    } catch (error) {
      console.error("Signup error:", error)
    }
   

  }
  return (


    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>

        <img className='w-35 mb-10' src="data:image/png;base64,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" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className='text-x1  font-bold mb-2'>What's your Email</h3>
          <input required
            value={email}
            onChange={(e) => setEmail
                (e.target.value)
              
            }
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com' />

          <h3 className='text-lg  font-bold mb-2'>Enter Password</h3>

          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e) => setPassword
                (e.target.value)
              
            }
            type="password"
            placeholder='password' />
          <button className='bg-[#111] text-white font-semibold mb-12 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
            Login</button>

        </form>
        <p className='text-center'>New here?  <Link to='/UserSIgnup' className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link to='/CaptainLogin' className='bg-[#111] flex justify-center  text-white font-semibold mb-23 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin
