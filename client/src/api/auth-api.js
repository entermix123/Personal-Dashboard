import requester from "./requester"

const BASE_URL = 'http://localhost:3030/users';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */

// Login
export const login = (email, password) => requester.post(`${BASE_URL}/login`, { email, password });

// Register
export const register = (email, password) => requester.post(`${BASE_URL}/register`, { email, password });

// User Details
export const details = (userId) => requester.get(`${BASE_URL}/${userId}`);

// Get User Administrative data
export const userAdminDetails = () => requester.get(`${BASE_URL}/me`);

// User Update
export const update = (userId, email, password) => requester.put(`${BASE_URL}/${userId}`, email, password);

// Delete User
export const remove = (userId) => requester.del(`${BASE_URL}/${userId}`);

// Logout
export const logout = () => requester.get(`${BASE_URL}/logout`);