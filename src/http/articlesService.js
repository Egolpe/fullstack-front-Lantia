import axios from 'axios';

export function getArticles(){
    return axios.get(process.env.REACT_APP_URL_BASE_WIKI_API)
}
