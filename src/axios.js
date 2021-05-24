import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//   how to use the axios :::::      instance.get('/foobar');

export default instance;