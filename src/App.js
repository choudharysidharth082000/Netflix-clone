import React,{useEffect} from 'react';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout, login, selectUser} from './features/userSlice.js'

//importing the componennts 
import Profilescreen from './Profilecreen'
import Signin from './Signin'
import Homescreen from './Homescreen'
import Nav from './Nav'
import { auth } from './firebasetools ';
import Newuser from './Newuser'

function App() 
{
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(()=>
  {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth)
      {
        //Logged in
        
        
        dispatch(login({
          uid: userAuth.uid,
          email : userAuth.email,
        }));

        
      }
      else
      {
        dispatch(logout())
        //logged out
      }
    })
    // return unsubscribe;


  },[dispatch])
  


  
  return (
    <div>
      

      <Router >
        {
          !user ? (
            <Signin/>

          )
          :
          (
            <Switch>

          <Route path="/profile">
            <Profilescreen />
            
            </Route> 
            
          <Route exact path="/">
            <Homescreen />
          </Route>
         
          
        </Switch>

          )
        }
        
      </Router>

      
    </div>
  )
}


export default App;
