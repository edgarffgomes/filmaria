//base da url https://api.themoviedb.org/3
//url da api https://api.themoviedb.org/3/movie/now_playing?api_key=0872d21dc9c996bc89d07ecf09909025&language=pt-br
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
export default api;
