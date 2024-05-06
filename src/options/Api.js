import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://trains.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '4c035d4fb5mshceb4f7f98d5a62ep1f1861jsn2596a9597806',
    'X-RapidAPI-Host': 'trains.p.rapidapi.com'
  },
  data: {search: 'Rajdhani'}
};

export const Api = async () => {
    try {
        const response = await axios.request(options);
        return  response;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
