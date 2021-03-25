import axios from 'axios';

const baseUrl = "https://mytasko.herokuapp.com/api/";

const AxiosInstance = axios.create(
    {
        baseURL : baseUrl,
        timeout : 5000,
        headers : {
            Authorization : localStorage.getItem('access_token') ? 'JWT ' + localStorage.getItem('access_token') : null,
            'Content-Type' : 'application/json',
            accept : 'application/json', 
        },
    }
)

export default AxiosInstance;