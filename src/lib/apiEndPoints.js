import axios from 'axios';
// Token
const token = sessionStorage.getItem('token');

const instance = axios.create({
	baseURL: 'https://kampai-backend.onrender.com/admin/',
});

instance.interceptors.request.use((config) => {
	if (!config.excludeToken) {
		// Add the Bearer token to the headers
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

const reports = async (method, url, data, id) => {
	let fullUrl = !id ? url : url + `/${id}`;
	try {
		const res = method
			? await instance.post(fullUrl, data)
			: await instance.get(fullUrl);
		return res.data;
	} catch (error) {
		if (error.response) {
			return {
				message: error.response.data,
				status: error.response.status,
			};
		} else if (error.request) {
			return { message: 'request cannot be processed' };
		} else {
			return error.message;
		}
	}
};

// Auth Urls
// const REGISTER_URL = 'create/RegisterUser';
const LOGIN_URL = 'https://kampai-backend.onrender.com/auth/login';
// const OTP_URL = 'auth/SendVerificationCode';
// const OTP_VERIFY = 'auth/VerifyVerificationCode';
const SUPPLIERS_NUM = 'users/getSuppliersNumber';
const DRIVERS_NUM = 'users/getDriversNumber';
const BUYERS_NUM = 'users/getBuyersNumber';
const FLAGGED_PRODUCTS = 'flags/getAllProductFlags';
const TOTAL_FLAGGED_PRODUCTS = 'flags/getTotalProductFlags';
const FLAGGED_USERS = 'flags/getAllUserFlags';
const TOTAL_FLAGGED_USERS = 'flags/getTotalUserFlags';

// // Authentication
// export async function registerUser(email__password) {
// 	try {
// 		const res = await instance.post(REGISTER_URL, email__password, {
// 			excludeToken: true,
// 		});
// 		return res.data;
// 	} catch (error) {
// 		return error.response.data;
// 	}
// }

export async function loginUser(email__password) {
	return await reports('post', LOGIN_URL, email__password);
}

export async function getSuppliersNum() {
	return await reports('', SUPPLIERS_NUM);
}
export async function getDriversNum() {
	return await reports('', DRIVERS_NUM);
}
export async function getBuyersNum() {
	return await reports('', BUYERS_NUM);
}
export async function getFlaggedProducts() {
	return await reports('', FLAGGED_PRODUCTS);
}
export async function getTotalFlaggedProductNumbers() {
	return await reports('', TOTAL_FLAGGED_PRODUCTS);
}
export async function getFlaggedUsers() {
	return await reports('', FLAGGED_USERS);
}
export async function getTotalFlaggedUserNumbers() {
	return await reports('', TOTAL_FLAGGED_USERS);
}
