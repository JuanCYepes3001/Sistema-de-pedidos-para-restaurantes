// Configuración de la API
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Endpoints principales
export const ENDPOINTS = {
  // Autenticación
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  
  // Productos
  PRODUCTS: {
    LIST: '/products',
    CREATE: '/products',
    UPDATE: '/products/:id',
    DELETE: '/products/:id',
    BY_CATEGORY: '/products/category/:categoryId',
  },
  
  // Categorías
  CATEGORIES: {
    LIST: '/categories',
    CREATE: '/categories',
    UPDATE: '/categories/:id',
    DELETE: '/categories/:id',
  },
  
  // Pedidos
  ORDERS: {
    LIST: '/orders',
    CREATE: '/orders',
    UPDATE: '/orders/:id',
    DELETE: '/orders/:id',
    BY_STATUS: '/orders/status/:status',
    KITCHEN: '/orders/kitchen',
  },
  
  // Restaurante
  RESTAURANT: {
    INFO: '/restaurant',
    UPDATE: '/restaurant',
    STATUS: '/restaurant/status',
    HOURS: '/restaurant/hours',
  },
  
  // Reportes
  REPORTS: {
    SALES: '/reports/sales',
    PRODUCTS: '/reports/products',
    ORDERS: '/reports/orders',
  },
};

// Headers por defecto
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// Timeouts
export const API_TIMEOUTS = {
  REQUEST: 10000, // 10 segundos
  UPLOAD: 30000,  // 30 segundos para subida de archivos
}; 