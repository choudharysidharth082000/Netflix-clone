import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './Request'
import './row.css'
import Youtube from 'react-youtube'
import movieTrailor  from 'movie-trailer'


const Row =({title, fetchURL , isRowLarge= false})=> {

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const baseURL = "https://image.tmdb.org/t/p/original/";

    const [movies, setmovies]= useState([]);
    const [trailorURL, settrailerURL]= useState("");

    useEffect(()=>
    {


        async function fetchingdata()
        {
            const request = await axios.get(fetchURL);
            setmovies(request.data.results);
            

        }
        fetchingdata();

    },[fetchURL]);

    const handleonclick = (element)=>
    {
        if(trailorURL)
        {
            settrailerURL("");
        }
        else
        {
            movieTrailor(element?.name || "").then((url) => {
                const urlParams =new URLSearchParams( new URL(url).search);
                settrailerURL( urlParams.get('v'));

            }).catch(error => console.log(error))
        }

    }

    
    return (
        <div className="Contents">
            <h1>{title}</h1>

            <div className="imageposte">
                {movies.map(element => (
                    <img onClick={()=> handleonclick(element)} className={`row__poster ${isRowLarge && "row__posterlarge"}`} src={`${baseURL}${isRowLarge ? element.poster_path : element.backdrop_path}`} alt={movies.original_title}/>
                ))}
            </div>

            {trailorURL &&  <Youtube videoId={trailorURL} opts={opts} />}

            
        </div>
    )
}

export default Row
