import axios from 'axios';
// Token
const token = sessionStorage.getItem('token');

const instance = axios.create({
	baseURL: 'https://kampai-backend.onrender.com/',
});

instance.interceptors.request.use((config) => {
	if (!config.excludeToken) {
		// Add the Bearer token to the headers
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

// Auth Urls
const REGISTER_URL = 'create/RegisterUser';
const LOGIN_URL = 'auth/Login';
// const OTP_URL = 'auth/SendVerificationCode';
// const OTP_VERIFY = 'auth/VerifyVerificationCode';

// Authentication
export async function registerUser(email__password) {
	try {
		const res = await instance.post(REGISTER_URL, email__password, {
			excludeToken: true,
		});
		return res.data;
	} catch (error) {
		return error.response.data;
	}
}

export async function loginUser(email__password) {
	try {
		const res = await instance.post(LOGIN_URL, email__password);
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
}
