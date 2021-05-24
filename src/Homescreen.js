import React, {useState, useEffect} from 'react'
import './App.css'



//importing the components of the app
import Row from './Row'
import request from './Request'
import requests from './Request'
import Banner from './Banner'
import RowSeeingtest from './RowSeeingtest'

import Nav from './Nav'

function Homescreen() {

  

  return (
    <div className='app'>
      <Nav />
      <Banner fetchURL={requests.fetchlatest} />
    

      
      

      
      <Row title = 'NETFLIX ORIGINALS' fetchURL={requests.fetchlatest} isRowLarge /> 
      <Row title = 'Now Playing' fetchURL={requests.fetchnowplaying} isRowLarge /> 
      <Row title = 'ACTION' fetchURL={requests.fetchaction} isRowLarge /> 
      <Row title = 'HORROR THRILLER' fetchURL={requests.fetchhorror} isRowLarge /> 
      <Row title = 'COMEDY' fetchURL={requests.fetchcomedy} isRowLarge /> 
      <Row title = 'ROMANCE' fetchURL={requests.fetchromance} isRowLarge /> 
      <Row title = 'DOCUMENTRIES' fetchURL={requests.fetchdocumentry} isRowLarge /> 
      
      

          </div>
  )
}

export default Homescreen
