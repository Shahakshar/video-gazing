import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': 'b30efe13a7msh2a717fc0b37a661p1a735ajsn12406da9fc32',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (searchTerm) => {
    const {data} = await axios.get(`${BASE_URL}/${searchTerm}`, options)

    return data;
};