import React,{useRef} from 'react'
import { auth } from './firebasetools ';
import './Signingin.css'

function Signingin() {

    const emailref =useRef();
    const passwordref = useRef();

    const register = (e)=>
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authuser)=>
        {
            console.log(authuser);
            

        }).catch(error => {
            alert(error.message);
        })

    }


    
    const signin =(e)=>

    {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authuser)=>
        {
            console.log(authuser)

        }).catch(error => {
            alert(error.message);
        })
        
    }
    return (
        <div className="signupscreen">
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailref} type="email" placeholder="Email or phone number"/>
                <input ref={passwordref} type="password" placeholder="password"/>
                <button onClick={signin} type="submit">Sign In</button>
            </form>
            <h4>
                                    <span className="signupscreen__gray">New to Netflix? </span>
                                    <span className="signupscreen__link"
                                    onClick={register}
                                    >Sign Up Now.</span>
                                </h4>
            
        </div>
    )
}

export default Signingin
