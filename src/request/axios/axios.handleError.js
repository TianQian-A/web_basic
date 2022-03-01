export default function responseHandle(error) {
	switch (error.status) {
		case 401:
			return { 
				message: 'Unauthorized',
				status: 401,
			};
		case 403:
			return {
				message: 'Forbidden',
				status: 403,
			};
		case 404:
			return {
				message: 'Not Found',
				status: 404,
			};
		case 500:
			return {
				message: 'Internal Server Error',
				status: 500,
			};
		default:
			return {
				message: error.message || 'Something went wrong',
				status: 500,
			};
	}
}
