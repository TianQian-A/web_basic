import axios from 'axios';
import { filterObjEmpty } from '../../utils/defaultMethod';
import handleResponse from './axios.handleResponse';
import handleError from './axios.handleError';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.interceptors.request.use(
	(config) => {
		// 过滤空值 
		if (config.method === 'post' && config.data) {
			config.data = filterObjEmpty(config.data);
		}
		if (config.method === 'get' && config.params) {
			config.params = filterObjEmpty(config.params);
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
axios.interceptors.response.use(
	(response) => {
		return Promise.resolve(handleResponse(response));
	},
	(error) => {
		return Promise.resolve(handleError(error));
	},
);

export default axios;
