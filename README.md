# 🛒 Ecommerce Frontend
# Proyecto
Este es el frontend de una aplicación de ecommerce desarrollada con React.js. El proyecto está configurado para trabajar de manera local con una API backend.

## 📁 Estructura del Proyecto

```
ecomercefront/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js                     # Componente principal
│   ├── index.js                   # Punto de entrada de la aplicación
│   ├── assets/                    # Recursos estáticos
│   │   ├── images/               # Imágenes (logos, iconos, etc.)
│   │   ├── icons/                # Iconos SVG
│   │   └── styles/               # Estilos CSS globales
│   │       ├── App.css           # Estilos del componente principal
│   │       └── index.css         # Estilos base
│   ├── components/               # Componentes reutilizables
│   │   ├── common/               # Componentes genéricos (botones, modales)
│   │   ├── layout/               # Componentes de layout (header, footer)
│   │   ├── product/              # Componentes de productos
│   │   ├── cart/                 # Componentes del carrito
│   │   └── user/                 # Componentes de usuario
│   ├── pages/                    # Páginas principales
│   │   ├── home/                 # Página de inicio
│   │   ├── products/             # Catálogo y detalles de productos
│   │   ├── cart/                 # Carrito de compras
│   │   ├── checkout/             # Proceso de pago
│   │   └── auth/                 # Login y registro
│   ├── services/                 # Servicios y APIs
│   │   └── api/                  # Configuración de API
│   │       └── apiService.js     # Servicio base para peticiones HTTP
│   ├── hooks/                    # Custom React Hooks
│   ├── context/                  # Context API para estado global
│   ├── utils/                    # Funciones utilitarias
│   │   └── apiUtils.js           # Utilidades para APIs
│   └── constants/                # Constantes de la aplicación
│       └── apiRoutes.js          # Rutas y endpoints de la API
├── .env                          # Variables de entorno
├── .env.example                  # Ejemplo de variables de entorno
├── package.json                  # Dependencias y scripts
└── README.md                     # Documentación del proyecto
```

## 🚀 Tecnologías Utilizadas

- **React.js** - Framework de JavaScript para interfaces de usuario
- **Create React App** - Herramienta de configuración y build
- **CSS3** - Estilos y diseño responsive
- **Fetch API** - Para peticiones HTTP a la API
- **LocalStorage** - Almacenamiento local del navegador

## ⚙️ Configuración del Entorno

### Variables de Entorno

Copia el archivo `.env.example` como `.env` y configura las siguientes variables:

```bash
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_API_TIMEOUT=10000

# Endpoints principales
REACT_APP_AUTH_ENDPOINT=/auth
REACT_APP_PRODUCTS_ENDPOINT=/products
REACT_APP_CATEGORIES_ENDPOINT=/categories
REACT_APP_CART_ENDPOINT=/cart
REACT_APP_ORDERS_ENDPOINT=/orders
REACT_APP_USERS_ENDPOINT=/users

# Configuración de la aplicación
REACT_APP_APP_NAME=Mi Ecommerce
REACT_APP_CURRENCY=USD
REACT_APP_ITEMS_PER_PAGE=12

# Configuración de imágenes
REACT_APP_IMAGES_BASE_URL=http://localhost:3001/uploads
REACT_APP_DEFAULT_IMAGE=/images/no-image.jpg
```

## 🛠️ Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Aguilon22JG/eComerceFrontend.git
   cd eComerceFrontend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   ```bash
   cp .env.example .env
   # Edita el archivo .env con tus configuraciones
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📋 Scripts Disponibles

### `npm start`
Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará automáticamente cuando hagas cambios.\
También verás errores de lint en la consola.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.\
Optimiza React para el mejor rendimiento en producción.

Los archivos son minificados y los nombres incluyen hashes.\
¡Tu aplicación está lista para ser desplegada!

### `npm run eject`
**Nota: Esta es una operación irreversible. ¡Una vez que hagas `eject`, no podrás volver atrás!**

Si no estás satisfecho con las herramientas de build y configuración, puedes hacer `eject` en cualquier momento.

## 🔧 Funcionalidades del Ecommerce

### ✨ Características Principales
- 🏠 **Página de inicio** - Landing page con productos destacados
- 📦 **Catálogo de productos** - Lista y búsqueda de productos
- 🔍 **Filtros y categorías** - Organización de productos
- 🛒 **Carrito de compras** - Gestión de productos seleccionados
- 💳 **Proceso de checkout** - Finalización de compras
- 👤 **Autenticación de usuarios** - Login y registro
- 📱 **Diseño responsive** - Optimizado para móviles y desktop

### 🔌 Integración con API
- **Autenticación JWT** - Manejo seguro de sesiones
- **CRUD de productos** - Gestión completa de productos
- **Gestión de carrito** - Persistencia de carrito por usuario
- **Procesamiento de órdenes** - Sistema completo de pedidos
- **Subida de imágenes** - Soporte para archivos multimedia

### 🎨 Arquitectura del Código
- **Componentes reutilizables** - Diseño modular y escalable
- **Custom Hooks** - Lógica reutilizable de React
- **Context API** - Gestión de estado global
- **Servicios organizados** - Separación clara de responsabilidades
- **Utilidades comunes** - Funciones helper reutilizables

## 🌐 Conexión con Backend

Este frontend está diseñado para conectarse con una API REST. Asegúrate de tener tu servidor backend ejecutándose en `http://localhost:3001` (o ajusta la URL en las variables de entorno).

### Endpoints Esperados:
- `POST /api/auth/login` - Autenticación de usuarios
- `GET /api/products` - Obtener productos
- `POST /api/cart/add` - Agregar al carrito
- `POST /api/orders` - Crear órdenes
- Y más endpoints definidos en `src/constants/apiRoutes.js`

## 📚 Próximos Pasos

### 🚧 Desarrollo en Progreso
- [ ] Implementar componentes de productos
- [ ] Crear sistema de autenticación
- [ ] Desarrollar carrito de compras
- [ ] Integrar pasarelas de pago
- [ ] Añadir sistema de búsqueda y filtros
- [ ] Implementar panel de administración

### 🔄 Estado del Proyecto
Este proyecto está en desarrollo activo. La estructura base está completa y lista para el desarrollo de funcionalidades específicas.

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz fork del repositorio
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y commits: `git commit -m 'Añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📞 Contacto

- **Repositorio:** [eComerceFrontend](https://github.com/Aguilon22JG/eComerceFrontend)
- **Rama actual:** feature/Javier

## 📖 Recursos Adicionales

Para aprender más sobre las tecnologías utilizadas:

- [Documentación de React](https://reactjs.org/)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Guía de APIs REST](https://restfulapi.net/)

---

**Nota:** Este proyecto fue inicializado con Create React App y adaptado para el desarrollo de un ecommerce completo.
