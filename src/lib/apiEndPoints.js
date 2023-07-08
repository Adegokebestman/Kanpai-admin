import axios from 'axios';
// Token

const instance = axios.create({
	baseURL: 'https://kampai-backend.onrender.com/',
});

instance.interceptors.request.use((config) => {
	const token = sessionStorage.getItem('token');
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

// Authentication
const LOGIN_URL = 'auth/login';

export async function loginUser(email__password) {
	//used
	return await reports('post', LOGIN_URL, email__password);
}

// Numbers
const SUPPLIERS_NUM = 'admin/users/getSuppliersNumber';
const DRIVERS_NUM = 'admin/users/getDriversNumber';
const BUYERS_NUM = 'admin/users/getBuyersNumber';

export async function getSuppliersNum() {
	//used
	return await reports('', SUPPLIERS_NUM);
}
export async function getDriversNum() {
	//used
	return await reports('', DRIVERS_NUM);
}
export async function getBuyersNum() {
	//used
	return await reports('', BUYERS_NUM);
}

// Flags
const FLAGGED_PRODUCTS = 'admin/flags/getAllProductFlags';
const TOTAL_FLAGGED_PRODUCTS = 'admin/flags/getTotalProductFlags';
const FLAGGED_USERS = 'admin/flags/getAllUserFlags';
const TOTAL_FLAGGED_USERS = 'admin/flags/getTotalUserFlags';
const FLAG_ITEM = 'admin/flags/getFlagById';

export async function getFlaggedProducts() {
	//used
	return await reports('', FLAGGED_PRODUCTS);
}
export async function getTotalFlaggedProductNumbers() {
	//used
	return await reports('', TOTAL_FLAGGED_PRODUCTS);
}
export async function getFlaggedUsers() {
	//used
	return await reports('', FLAGGED_USERS);
}
export async function getTotalFlaggedUserNumbers() {
	//used
	return await reports('', TOTAL_FLAGGED_USERS);
}
export async function getFlagItem(flagId) {
	//used
	return await reports('post', FLAG_ITEM, { flagId });
}

// Analytics
const YEARLY = 'admin/analytics/getYearlyTransactions';
const MONTHLY = 'admin/analytics/getMonthlyTransactions';
const WEEKLY = 'admin/analytics/getWeeklyTransactions';

export async function getYearlyTransactions() {
	return await reports('', YEARLY);
}
export async function getMonthlyTransactions() {
	return await reports('', MONTHLY);
}
export async function getWeeklyTransactions() {
	return await reports('', WEEKLY);
}

// Suspend and Unsuspend
const CLOSE_FLAG = 'admin/flags/closeFlag';

export async function closeFlag(flagId) {
	return await reports('post', CLOSE_FLAG, flagId);
}
const SUSPENDED_PRODUCTS = 'admin/products/getSuspendedProducts';
const UNSUSPEND_PRODUCTS = 'admin/products/unSuspendProduct';
const SUSPEND_PRODUCT = 'admin/flags/suspendProduct';

export async function getSuspendedProducts() {
	//used
	return await reports('', SUSPENDED_PRODUCTS);
}
export async function suspendAProduct(data) {
	return await reports('post', SUSPEND_PRODUCT, data);
}
export async function unSuspendAProduct(productId) {
	return await reports('post', UNSUSPEND_PRODUCTS, productId);
}

const SUSPENDED_USERS = 'admin/users/getSuspendedUsers';
const UNSUSPEND_USERS = 'admin/users/unSuspendUser';
const SUSPEND_USER = 'admin/flags/suspendUser';

export async function getSuspendedUsers() {
	//used
	return await reports('', SUSPENDED_USERS);
}
export async function suspendAUser(data) {
	return await reports('post', SUSPEND_USER, data);
}
export async function unSuspendAUser(productId) {
	return await reports('post', UNSUSPEND_USERS, productId);
}

// UserAndProduct Details
const PRODUCT_DETAILS = 'products/getProduct';
const USER_DETAILS = 'users/getUserDetails';

export async function getProductDetails(productId) {
	return await reports('', PRODUCT_DETAILS, '', productId);
}
export async function getUserDetails(productId) {
	return await reports('', USER_DETAILS, '', productId);
}

// Activities
const USER_ACTIVITY = 'admin/users/getUserActivities';
const PRODUCT_ACTIVITY = 'admin/products/getAllProductOrders';

export async function getUserActivities(userId) {
	return await reports('post', USER_ACTIVITY, { userId });
}
export async function getAllProductOrders(productId) {
	return await reports('post', PRODUCT_ACTIVITY, { productId });
}
