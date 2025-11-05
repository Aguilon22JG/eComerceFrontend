// Servicio base para las llamadas a la API
import { API_CONFIG } from '../constants/apiRoutes';

class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
    this.timeout = API_CONFIG.TIMEOUT;
  }

  // Método para obtener el token de autenticación
  getAuthToken() {
    return localStorage.getItem('token');
  }

  // Configuración de headers por defecto
  getDefaultHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    const token = this.getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  // Método genérico para hacer peticiones HTTP
  async makeRequest(url, options = {}) {
    try {
      const config = {
        headers: this.getDefaultHeaders(),
        ...options,
        headers: {
          ...this.getDefaultHeaders(),
          ...options.headers,
        },
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Método GET
  async get(url, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;
    
    return this.makeRequest(fullUrl, {
      method: 'GET',
    });
  }

  // Método POST
  async post(url, data = {}) {
    return this.makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Método PUT
  async put(url, data = {}) {
    return this.makeRequest(url, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // Método PATCH
  async patch(url, data = {}) {
    return this.makeRequest(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Método DELETE
  async delete(url) {
    return this.makeRequest(url, {
      method: 'DELETE',
    });
  }

  // Método para subir archivos
  async uploadFile(url, file, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);
    
    Object.keys(additionalData).forEach(key => {
      formData.append(key, additionalData[key]);
    });

    const headers = { ...this.getDefaultHeaders() };
    delete headers['Content-Type']; // Dejar que el navegador establezca el Content-Type para FormData

    return this.makeRequest(url, {
      method: 'POST',
      body: formData,
      headers,
    });
  }

  // Método para manejar errores de autenticación
  handleAuthError() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}

// Instancia única del servicio
const apiService = new ApiService();

export default apiService;