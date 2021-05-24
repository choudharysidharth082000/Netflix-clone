import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch , useHistory } from 'react-router-dom';


//importing the file components for the app
import Signingin from './Signingin'


import './banner.css'

function Signin() {
    const history= useHistory();
    const [variable, setvariable] = useState(false);

    return (
        <div className="login_screen">
            <div className="image">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png" alt=""/>

            
                <button
                onClick={()=> setvariable(true)}
                 className="login_screen_button">Sign In</button>
                </div>

                <div className="login_screen_body">
                    {variable?(
                        <Signingin />
                    ) :
                    (
                        <>

                        <h1>Unlimited films, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
    
                        <div className="login_screen_input">
                            <form action="">
                                <input type="email" placeholder="Email address"/>
                                <button
                                 
                                className="login_screen_getstarted"
                                onClick={history.push("/newuser")}
                                >Get Started</button>

                              
                            </form>
                        </div>
                        </>

                    )}

                
                   

                    
                </div>
            
           
        </div>
        
    )
}

export default Signin
