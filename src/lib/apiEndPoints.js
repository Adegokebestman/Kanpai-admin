import axios from 'axios';
// Token

const instance = axios.create({
	baseURL: 'https://kanpainode-b83dbacd8a19.herokuapp.com/',
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
const ACTIVE_BUYERS = 'admin/users/getActiveBuyers';
const ACTIVE_SELLERS = 'admin/users/getActiveSuppliers';
const ACTIVE_DRIVERS = 'admin/users/getActiveDrivers';
const INACTIVE_BUYERS = 'admin/users/getInactiveBuyers';
const INACTIVE_SELLERS = 'admin/users/getInactiveSuppliers';
const INACTIVE_DRIVERS = 'admin/users/getInactiveDrivers';

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
export async function getActiveBuyers() {
	//used
	return await reports('', ACTIVE_BUYERS);
}
export async function getActiveSuppliers() {
	//used
	return await reports('', ACTIVE_SELLERS);
}
export async function getActiveDrivers() {
	//used
	return await reports('', ACTIVE_DRIVERS);
}
export async function getInactiveBuyers() {
	//used
	return await reports('', INACTIVE_BUYERS);
}
export async function getInactiveSuppliers() {
	//used
	return await reports('', INACTIVE_SELLERS);
}
export async function getInactiveDrivers() {
	//used
	return await reports('', INACTIVE_DRIVERS);
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
	//used
	return await reports('post', SUSPEND_PRODUCT, data);
}
export async function unSuspendAProduct(productId) {
	return await reports('post', UNSUSPEND_PRODUCTS, { productId });
}

const SUSPENDED_USERS = 'admin/users/getSuspendedUsers';
const UNSUSPEND_USERS = 'admin/users/unSuspendUser';
const SUSPEND_USER = 'admin/flags/suspendUser';

export async function getSuspendedUsers() {
	//used
	return await reports('', SUSPENDED_USERS);
}
export async function suspendAUser(data) {
	//used
	return await reports('post', SUSPEND_USER, data);
}
export async function unSuspendAUser(userId) {
	return await reports('post', UNSUSPEND_USERS, { userId });
}

// UserAndProduct Details
const PRODUCT_DETAILS = 'products/getProduct';
const USER_DETAILS = 'users/getUserDetails';

export async function getProductDetails(productId) {
	//used
	return await reports('', PRODUCT_DETAILS, '', productId);
}
export async function getUserDetails(userId) {
	//used
	return await reports('', USER_DETAILS, '', userId);
}

// Activities
const USER_ACTIVITY = 'admin/users/getUserActivities';
const PRODUCT_ACTIVITY = 'admin/products/getAllProductOrders';

export async function getUserActivities(userId) {
	//used
	return await reports('post', USER_ACTIVITY, { userId });
}
export async function getAllProductOrders(productId) {
	//used
	return await reports('post', PRODUCT_ACTIVITY, { productId });
}

// USERS

const ALL_USERS = 'users/getAllBuyers';
const ALL_SELLERS = 'users/getAllSuppliers';
const ALL_DRIVERS = 'users/getAllDrivers';

export async function getAllUsers() {
	//used
	return await reports('', ALL_USERS);
}
export async function getAllSellers() {
	//used
	return await reports('', ALL_SELLERS);
}
export async function getAllDrivers() {
	//used
	return await reports('', ALL_DRIVERS);
}

// PAYMENT INFO
const SHIPPING_INFO = 'shipping/getUserShippingInfo';

export async function getUserShippingInfo(id) {
	//used
	return await reports('', SHIPPING_INFO, null, id);
}

// Inventory
const INVENTORY = 'admin/products/getSupplierInventory';

export async function getSupplierInventory(supplierId) {
	//used
	return await reports('post', INVENTORY, { supplierId });
}

//	Payments
const PAYMENT_REQUESTS = 'admin/payments/getPaymentRequests';
const ACCEPTED_ORDERS = 'admin/payments/getAcceptedOrders';
const APPROVER_PAYMENT = 'admin/payments/approvePayment';
const DECLINE_PAYMENT = 'admin/payments/declinePayment';

export async function getPaymentRequests() {
	//used
	return await reports('', PAYMENT_REQUESTS);
}
export async function getAcceptedOrders() {
	//used
	return await reports('', ACCEPTED_ORDERS);
}
export async function approvePayment(id) {
	//used
	return await reports('post', APPROVER_PAYMENT, { id });
}
export async function declinePayment(id) {
	//used
	return await reports('post', DECLINE_PAYMENT, { id });
}
