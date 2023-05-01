import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication'

export const Login = () => {
    const [user, setUser] = useState(' ')
    const Auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        Auth.login(user)
        navigate('/')
    } 

  return (
    <>
       <div>
           <label>
              Usename:{' '}
              <input type='text' onChange={(e) => setUser(e.target.value)} />
              </label>
              <button onClick={handleLogin}>Login</button>
        </div>
    </>
  )
}
