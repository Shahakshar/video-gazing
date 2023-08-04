import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '??',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (searchTerm) => {
    const {data} = await axios.get(`${BASE_URL}/${searchTerm}`, options)

    return data;
};