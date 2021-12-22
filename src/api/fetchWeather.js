import axios from 'axios';
// creating api and getting location
const URL = 'http://dataservice.accuweather.com/currentconditions/v1/';
const API_KEY = '18iZV9w51KTTlMzKM4TbqOmjfkhOhFV3';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
