import { Button } from '@mui/material'
// import React, { useState } from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
                console.log(result);
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className='Login'>
            <div className="login__logo">
                <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>SIGN IN</Button>
        </div>
    )
}

export default Login