import axios from 'axios';

export function getNews(){
    return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f6fa62f5aeee40a98344f130bc69b444");
}