// Componente contenedor para Login y Register con pestañas
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' o 'register'

  const handleAuthSuccess = (userData) => {
    console.log('Autenticación exitosa:', userData);
    //alert(`¡Bienvenido ${userData.nombre_usuario}!`);
  };

  const switchToLogin = () => {
    setActiveTab('login');
  };

  const switchToRegister = () => {
    setActiveTab('register');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Login y Registro
        </h1>
        
        {/* Pestañas */}
        <div style={{ display: 'flex', marginBottom: '20px', borderBottom: '2px solid #f0f0f0' }}>
          <button
            onClick={switchToLogin}
            style={{
              flex: 1,
              padding: '15px',
              border: 'none',
              backgroundColor: activeTab === 'login' ? '#007bff' : 'transparent',
              color: activeTab === 'login' ? 'white' : '#007bff',
              cursor: 'pointer',
              fontSize: '16px',
              borderBottom: activeTab === 'login' ? '2px solid #007bff' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Iniciar sesión
          </button>
          <button
            onClick={switchToRegister}
            style={{
              flex: 1,
              padding: '15px',
              border: 'none',
              backgroundColor: activeTab === 'register' ? '#28a745' : 'transparent',
              color: activeTab === 'register' ? 'white' : '#28a745',
              cursor: 'pointer',
              fontSize: '16px',
              borderBottom: activeTab === 'register' ? '2px solid #28a745' : 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Crear cuenta
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div>
          {activeTab === 'login' ? (
            <Login 
              onSuccess={handleAuthSuccess}
              onSwitchToRegister={switchToRegister}
            />
          ) : (
            <Register 
              onSuccess={handleAuthSuccess}
              onSwitchToLogin={switchToLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;