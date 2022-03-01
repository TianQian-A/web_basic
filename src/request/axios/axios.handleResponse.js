export default function requestHandle(response) {
	const status = response.status;
	if ((status >= 200 && status <= 300) || status === 304) {
		let responseData = response.data;
		if (responseData.code === 0) {
			return responseData;
		} else {
			return Promise.reject({ status: responseData.code, message: responseData.msg });
		}
	} else {
		return Promise.reject({ status: status, message: response.statusText });
	}
}
