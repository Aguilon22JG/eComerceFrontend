// Constantes para las rutas de la API del ecommerce

// Base URL de la API
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

// Endpoints de autenticación
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/login`,
  REGISTER: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/register`,
  LOGOUT: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/logout`,
  REFRESH_TOKEN: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/refresh`,
  FORGOT_PASSWORD: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/forgot-password`,
  RESET_PASSWORD: `${API_BASE_URL}${process.env.REACT_APP_AUTH_ENDPOINT}/reset-password`,
};

// Endpoints de productos
export const PRODUCT_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}`,
  GET_BY_ID: (id) => `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}/${id}`,
  GET_BY_CATEGORY: (categoryId) => `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}/category/${categoryId}`,
  SEARCH: `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}/search`,
  FEATURED: `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}/featured`,
  ON_SALE: `${API_BASE_URL}${process.env.REACT_APP_PRODUCTS_ENDPOINT}/on-sale`,
};

// Endpoints de categorías
export const CATEGORY_ENDPOINTS = {
  GET_ALL: `${API_BASE_URL}${process.env.REACT_APP_CATEGORIES_ENDPOINT}`,
  GET_BY_ID: (id) => `${API_BASE_URL}${process.env.REACT_APP_CATEGORIES_ENDPOINT}/${id}`,
};

// Endpoints del carrito
export const CART_ENDPOINTS = {
  GET_CART: `${API_BASE_URL}${process.env.REACT_APP_CART_ENDPOINT}`,
  ADD_ITEM: `${API_BASE_URL}${process.env.REACT_APP_CART_ENDPOINT}/add`,
  UPDATE_ITEM: (itemId) => `${API_BASE_URL}${process.env.REACT_APP_CART_ENDPOINT}/update/${itemId}`,
  REMOVE_ITEM: (itemId) => `${API_BASE_URL}${process.env.REACT_APP_CART_ENDPOINT}/remove/${itemId}`,
  CLEAR_CART: `${API_BASE_URL}${process.env.REACT_APP_CART_ENDPOINT}/clear`,
};

// Endpoints de órdenes
export const ORDER_ENDPOINTS = {
  CREATE_ORDER: `${API_BASE_URL}${process.env.REACT_APP_ORDERS_ENDPOINT}`,
  GET_ORDERS: `${API_BASE_URL}${process.env.REACT_APP_ORDERS_ENDPOINT}`,
  GET_ORDER_BY_ID: (id) => `${API_BASE_URL}${process.env.REACT_APP_ORDERS_ENDPOINT}/${id}`,
  UPDATE_ORDER_STATUS: (id) => `${API_BASE_URL}${process.env.REACT_APP_ORDERS_ENDPOINT}/${id}/status`,
};

// Endpoints de usuarios
export const USER_ENDPOINTS = {
  GET_PROFILE: `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/profile`,
  UPDATE_PROFILE: `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/profile`,
  GET_ORDER_HISTORY: `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/orders`,
  GET_WISHLIST: `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/wishlist`,
  ADD_TO_WISHLIST: `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/wishlist/add`,
  REMOVE_FROM_WISHLIST: (productId) => `${API_BASE_URL}${process.env.REACT_APP_USERS_ENDPOINT}/wishlist/remove/${productId}`,
};

// Configuración general
export const API_CONFIG = {
  TIMEOUT: process.env.REACT_APP_API_TIMEOUT || 10000,
  ITEMS_PER_PAGE: process.env.REACT_APP_ITEMS_PER_PAGE || 12,
  CURRENCY: process.env.REACT_APP_CURRENCY || 'USD',
};

// URLs de imágenes
export const IMAGE_URLS = {
  BASE_URL: process.env.REACT_APP_IMAGES_BASE_URL || 'http://localhost:3001/uploads',
  DEFAULT_IMAGE: process.env.REACT_APP_DEFAULT_IMAGE || '/images/no-image.jpg',
  PRODUCT_IMAGES: (filename) => `${process.env.REACT_APP_IMAGES_BASE_URL}/products/${filename}`,
  CATEGORY_IMAGES: (filename) => `${process.env.REACT_APP_IMAGES_BASE_URL}/categories/${filename}`,
  USER_AVATARS: (filename) => `${process.env.REACT_APP_IMAGES_BASE_URL}/avatars/${filename}`,
};

// Configuración de pagos
export const PAYMENT_CONFIG = {
  PAYPAL_CLIENT_ID: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
};

// Configuración de la aplicación
export const APP_CONFIG = {
  NAME: process.env.REACT_APP_APP_NAME || 'Mi Ecommerce',
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || 'development',
  DEBUG_MODE: process.env.REACT_APP_DEBUG_MODE === 'true',
};