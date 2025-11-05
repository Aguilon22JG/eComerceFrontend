// Utilidades para el manejo de APIs y datos

// Función para formatear errores de API
export const formatApiError = (error) => {
  if (error.response && error.response.data) {
    return error.response.data.message || 'Error en el servidor';
  }
  
  if (error.message === 'Request timeout') {
    return 'La petición ha tardado demasiado. Verifica tu conexión.';
  }
  
  if (error.message === 'Network Error') {
    return 'Error de conexión. Verifica tu conexión a internet.';
  }
  
  return error.message || 'Ha ocurrido un error inesperado';
};

// Función para validar respuestas de API
export const validateApiResponse = (response) => {
  if (!response) {
    throw new Error('Respuesta vacía del servidor');
  }
  
  if (response.error) {
    throw new Error(response.error);
  }
  
  return response;
};

// Función para formatear precios
export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

// Función para formatear URLs de imágenes
export const formatImageUrl = (imageUrl, baseUrl) => {
  if (!imageUrl) return process.env.REACT_APP_DEFAULT_IMAGE;
  
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  return `${baseUrl || process.env.REACT_APP_IMAGES_BASE_URL}/${imageUrl}`;
};

// Función para debounce (útil para búsquedas)
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Función para generar ID únicos
export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Función para validar email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar teléfono
export const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone);
};

// Función para guardar datos en localStorage
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

// Función para obtener datos de localStorage
export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

// Función para remover datos de localStorage
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

// Función para capitalizar texto
export const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Función para truncar texto
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Función para calcular descuentos
export const calculateDiscount = (originalPrice, discountPercentage) => {
  const discount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discount;
};

// Función para calcular totales del carrito
export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
};

// Función para validar stock disponible
export const isInStock = (product, requestedQuantity = 1) => {
  return product.stock >= requestedQuantity;
};