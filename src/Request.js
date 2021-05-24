

const requests = 
{
    fetchlatest: `discover/tv?api_key=94f9f5533f279def2c111bf737c3e9a9&with_networks=213`,
    fetchnowplaying: `/movie/now_playing?api_key=94f9f5533f279def2c111bf737c3e9a9`,
    fetchhorror : `/discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=27`,
    fetchcomedy : `discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=35`,
    fetchromance : `discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=10749`,

    fetchdocumentry : `discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=99`,
    fetchaction : `discover/movie?api_key=94f9f5533f279def2c111bf737c3e9a9&with_genres=28`,
    
    // https://api.themoviedb.org/3/movie/550?api_key=94f9f5533f279def2c111bf737c3e9a9


}

export default requests;