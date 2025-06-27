// Rutas de la aplicación
export const ROUTES = {
  // Rutas públicas
  PUBLIC: {
    HOME: '/',
    MENU: '/menu',
    PRODUCT_DETAIL: '/product/:id',
    CART: '/cart',
    CHECKOUT: '/checkout',
    ORDER_STATUS: '/order/:id',
    QR_SCANNER: '/qr-scanner',
  },
  
  // Rutas de autenticación
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  
  // Rutas del administrador
  ADMIN: {
    DASHBOARD: '/admin',
    PRODUCTS: '/admin/products',
    PRODUCT_CREATE: '/admin/products/create',
    PRODUCT_EDIT: '/admin/products/:id/edit',
    CATEGORIES: '/admin/categories',
    ORDERS: '/admin/orders',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings',
  },
  
  // Rutas de cocina
  KITCHEN: {
    ORDERS_BOARD: '/kitchen',
    ORDER_DETAIL: '/kitchen/order/:id',
  },
  
  // Rutas de domicilios (opcional)
  DELIVERY: {
    DELIVERY_BOARD: '/delivery',
    DELIVERY_MAP: '/delivery/map',
  },
};

// Rutas protegidas por rol
export const PROTECTED_ROUTES = {
  ADMIN: [
    ROUTES.ADMIN.DASHBOARD,
    ROUTES.ADMIN.PRODUCTS,
    ROUTES.ADMIN.CATEGORIES,
    ROUTES.ADMIN.ORDERS,
    ROUTES.ADMIN.REPORTS,
    ROUTES.ADMIN.SETTINGS,
  ],
  KITCHEN: [
    ROUTES.KITCHEN.ORDERS_BOARD,
    ROUTES.KITCHEN.ORDER_DETAIL,
  ],
  DELIVERY: [
    ROUTES.DELIVERY.DELIVERY_BOARD,
    ROUTES.DELIVERY.DELIVERY_MAP,
  ],
};

// Rutas que requieren autenticación
export const AUTH_REQUIRED_ROUTES = [
  ...PROTECTED_ROUTES.ADMIN,
  ...PROTECTED_ROUTES.KITCHEN,
  ...PROTECTED_ROUTES.DELIVERY,
];

// Rutas que no requieren autenticación
export const PUBLIC_ROUTES = [
  ROUTES.PUBLIC.HOME,
  ROUTES.PUBLIC.MENU,
  ROUTES.PUBLIC.PRODUCT_DETAIL,
  ROUTES.PUBLIC.CART,
  ROUTES.PUBLIC.CHECKOUT,
  ROUTES.PUBLIC.ORDER_STATUS,
  ROUTES.PUBLIC.QR_SCANNER,
  ROUTES.AUTH.LOGIN,
  ROUTES.AUTH.REGISTER,
  ROUTES.AUTH.FORGOT_PASSWORD,
  ROUTES.AUTH.RESET_PASSWORD,
]; 