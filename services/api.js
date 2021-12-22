import axios from 'axios';
const api = axios.create({
	baseURL:'https://lookao-api.herokuapp.com/'
});

export default api;