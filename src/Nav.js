import React ,{useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom';

import './nav.css'

function Nav() {
  const [handle , sethandle]= useState(false);
  const history = useHistory();
  
  const navbarfunctioning = () =>
  {
    if(window.scrollY >100)
    {
      sethandle(true);
    }
    else
    {
      sethandle(false);
    }
  }
  useEffect(()=>
  
  {
    window.addEventListener("scroll", navbarfunctioning);
    return()=>
    window.removeEventListener("scroll", navbarfunctioning);

  },[]);
    
    return (
        <div>
            <div className={`nav ${handle && "nav_containor"}`}>
            

                            
                           <div className="navcontainor">
                           <div className="logo">
                                <img onClick={()=>history.push("/")} src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-png-transparent.png" alt=""/>
                            </div>

                             <div className="avatar">
                                <img
                                onClick={()=>history.push("/profile")}
                                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                            </div> 
                           </div>


            </div>
            
        </div>
    )
}

export default Nav
