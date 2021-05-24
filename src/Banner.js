import React ,{useState, useEffect} from 'react'
import axios from './axios'
import requests from './Request'
import RowSeeingtest from './RowSeeingtest'

import './banner.css'

function Banner({fetchURL}) {
    const [movies, setmovies]= useState([]);

    useEffect(()=>
    {

        async function fetchingdata()
        {
            const request = await axios.get(fetchURL);
            setmovies(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            

        }
        fetchingdata();

    },[fetchURL]);

    console.log(movies);
   


   
    function truncate(string,n)
    {
        return string?.length > n ? string.substr(0,n-1) + ' ...': string;

    }
    return (
        <div className="banner" style ={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: "center center",

        }}>
            
            <div className="banner_contents">
                <h1 className="bannerheading">
                    {movies?.original_title || movies?.name || movies?.original_name}
                </h1>
            
            <div className="bannerbuttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner_discription">
               {truncate(movies?.overview,150)}
            </h1>

            <div className="banner--fadeBottom"/>

            

            
            
        </div>
        
        </div>
    )
}

export default Banner




// backgroundImage: `url('http://television.mxdwn.com/wp-content/uploads/2015/08/netflix-banner.jpg')`
