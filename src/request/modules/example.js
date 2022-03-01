import axios from '../axios';
export const example = {
	get: () => {
		return axios.get('/example/get');
	},
	post: (params) => {
		return axios.post('/example/post', params);
	},
	put: (params) => { 
		return axios.put('/example/put', params);
	},
	delete: (params) => {
		return axios.delete('/example/delete', params);
	},
};
