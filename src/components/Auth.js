import React from 'react'
import {auth, provider} from '../firebase-configure.js';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const Auth = (props) => {
    const {setIsAuth} = props;
    const gprov = async () => {
        try{

          const result = await signInWithPopup(auth, provider);
          cookies.set('auth-token', result.user.refreshToken );
          setIsAuth(true)
        } catch (err) {
          console.error(err)
        }
    }
  return (
    <div className='g1'>
      <p>Signin with Google to continue</p>
      <button onClick={gprov}>SignIn</button>
    </div>
  )
}

export default Auth
