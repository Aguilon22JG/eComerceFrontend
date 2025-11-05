// Componente de Login simple para pruebas
import React, { useState } from 'react';
import authService from '../../services/api/authService';

const Login = ({ onSuccess, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    correo_electronico: '',
    contrasena: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validaciones básicas
    if (!formData.correo_electronico || !formData.contrasena) {
      setError('Por favor, completa todos los campos');
      setLoading(false);
      return;
    }

    try {
      const result = await authService.login(
        formData.correo_electronico,
        formData.contrasena
      );

      if (result.success) {
        alert(`${result.message}`);
        console.log('Usuario logueado:', result.data);
        
        // Llamar callback de éxito si existe
        if (onSuccess) {
          onSuccess(result.data);
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Error en login:', error);
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="correo_electronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correo_electronico"
            name="correo_electronico"
            value={formData.correo_electronico}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder="Password"
          />
        </div>

        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '15px',
            padding: '8px',
            backgroundColor: '#ffebee',
            border: '1px solid #ffcdd2',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>¿No tienes cuenta?</p>
        <button
          type="button"
          onClick={onSwitchToRegister}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Registrarse aquí
        </button>
      </div>
    </div>
  );
};

export default Login;