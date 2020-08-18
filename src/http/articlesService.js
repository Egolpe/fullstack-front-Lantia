import axios from 'axios';

export function getArticles(option) {
    return axios.get(`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=big_data`);
}