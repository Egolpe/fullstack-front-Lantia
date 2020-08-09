import axios from 'axios';

export function getNews(){
    return axios.get(process.env.REACT_APP_URL_BASE_NEWS_API);
}