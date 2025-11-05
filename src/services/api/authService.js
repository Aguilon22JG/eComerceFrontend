// Servicio de autenticación para login y registro
import apiService from './apiService';
import { AUTH_ENDPOINTS } from '../../constants/apiRoutes';
import { saveToLocalStorage, removeFromLocalStorage } from '../../utils/apiUtils';

class AuthService {
  // Método para login
  async login(correo_electronico, contrasena) {
    try {
      const response = await apiService.post(AUTH_ENDPOINTS.LOGIN, {
        correo_electronico,
        contrasena
      });

      if (response.success && response.data.token) {
        // Guardar token y datos del usuario en localStorage
        saveToLocalStorage('token', response.data.token);

        return {
          success: true,
          data: response.data,
          message: response.message
        };
      }

      return {
        success: false,
        message: response.message || 'Error en el login rivisar backend'
      };
    } catch (error) {
      console.error('Error en login:', error);
      return {
        success: false,
        message: 'Error de conexión. Verifica que el servidor esté ejecutándose.'
      };
    }
  }

  // Método para registro
  async register(nombre_usuario, correo_electronico, contrasena, nombre_rol = 'cliente') {
    try {
      const response = await apiService.post(AUTH_ENDPOINTS.REGISTER, {
        nombre_usuario,
        correo_electronico,
        contrasena,
        nombre_rol
      });

      if (response.success && response.data.token) {
        // Guardar token y datos del usuario en localStorage
        saveToLocalStorage('token', response.data.token);
        saveToLocalStorage('user', {
          id_usuario: response.data.id_usuario,
          nombre_usuario: response.data.nombre_usuario,
          correo_electronico: response.data.correo_electronico,
          id_rol: response.data.id_rol,
          nombre_rol: response.data.nombre_rol
        });

        return {
          success: true,
          data: response.data,
          message: response.message
        };
      }

      return {
        success: false,
        message: response.message || 'Error en el registro'
      };
    } catch (error) {
      console.error('Error en registro:', error);
      return {
        success: false,
        message: 'Error de conexión. Verifica que el servidor esté ejecutándose.'
      };
    }
  }

  // Método para logout
  logout() {
    removeFromLocalStorage('token');
    removeFromLocalStorage('user');
    return {
      success: true,
      message: 'Sesión cerrada exitosamente'
    };
  }

  // Método para verificar si el usuario está logueado
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  }

  // Método para obtener los datos del usuario actual
  getCurrentUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error al obtener usuario actual:', error);
      return null;
    }
  }

  // Método para obtener el token actual
  getCurrentToken() {
    return localStorage.getItem('token');
  }
}

// Instancia única del servicio de autenticación
const authService = new AuthService();

export default authService;