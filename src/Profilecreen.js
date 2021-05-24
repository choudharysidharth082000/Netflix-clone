import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { auth } from './firebasetools ';
import Nav from './Nav'
import './profile.css'

function Profilecreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profilescreen">
            <Nav />

        <div className="profilescreen__body">
                <h1>Edit Profile</h1>
            <div className="profilescreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                
                <div className="profilescreen__details">
                    <h2>{user.email}</h2>
                            <div className="profilescreen__plans">

                                <h3>Plans</h3>
                                <p>Renewal due on 08/11/2021 .</p>


                                <div className="planscreenn">
                                    


                                </div>


                                <button 
                                onClick={()=> auth.signOut()}
                                className="profilescreen__signout">Sign Out</button>
                            </div>
                </div>


                </div>
            </div>

            

        

            
        </div>
    )
}

export default Profilecreen
