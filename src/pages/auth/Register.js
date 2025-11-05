// Componente de Registro simple para pruebas
import React, { useState } from 'react';
import authService from '../../services/api/authService';

const Register = ({ onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    nombre_usuario: '',
    correo_electronico: '',
    contrasena: '',
    nombre_rol: 'cliente'
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
    if (!formData.nombre_usuario || !formData.correo_electronico || !formData.contrasena) {
      setError('Por favor, completa todos los campos obligatorios');
      setLoading(false);
      return;
    }

    if (formData.contrasena.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const result = await authService.register(
        formData.nombre_usuario,
        formData.correo_electronico,
        formData.contrasena,
        formData.nombre_rol
      );

      if (result.success) {
        alert(`¡Registro exitoso! Bienvenido ${result.data.nombre_usuario}`);
        console.log('Usuario registrado:', result.data);
        
        // Llamar callback de éxito si existe
        if (onSuccess) {
          onSuccess(result.data);
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Error en registro:', error);
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Crear cuenta</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre_usuario">Username *:</label>
          <input
            type="text"
            id="nombre_usuario"
            name="nombre_usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder="Tu nombre de usuario"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="correo_electronico">Correo *:</label>
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
          <label htmlFor="contrasena">Contraseña *:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            minLength="6"
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="nombre_rol">Tipo de Usuario:</label>
          <select
            id="nombre_rol"
            name="nombre_rol"
            value={formData.nombre_rol}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="cliente">Cliente</option>
            <option value="administrador">Administrador</option>
          </select>
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
            backgroundColor: loading ? '#ccc' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>¿Ya tienes cuenta?</p>
        <button
          type="button"
          onClick={onSwitchToLogin}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Iniciar sesión aquí
        </button>
      </div>
    </div>
  );
};

export default Register;