// Estados de pedidos
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  READY: 'ready',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Estados del restaurante
export const RESTAURANT_STATUS = {
  OPEN: 'open',
  CLOSED: 'closed',
  PAUSED: 'paused',
  MAINTENANCE: 'maintenance',
};

// Estados de productos
export const PRODUCT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  OUT_OF_STOCK: 'out_of_stock',
  DISCONTINUED: 'discontinued',
};

// Estados de entrega
export const DELIVERY_STATUS = {
  PENDING: 'pending',
  ASSIGNED: 'assigned',
  ON_THE_WAY: 'on_the_way',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Roles de usuario
export const USER_ROLES = {
  ADMIN: 'admin',
  KITCHEN: 'kitchen',
  DELIVERY: 'delivery',
  CLIENT: 'client',
};

// Tipos de entrega
export const DELIVERY_TYPES = {
  LOCAL: 'local',      // Mesa local
  TAKEAWAY: 'takeaway', // Para llevar
  DELIVERY: 'delivery', // Domicilio
};

// Estados de notificaciones
export const NOTIFICATION_STATUS = {
  UNREAD: 'unread',
  READ: 'read',
  ARCHIVED: 'archived',
};

// Estados de pagos
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

// Estados de reservas
export const RESERVATION_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
};

// Labels para mostrar en la UI
export const STATUS_LABELS = {
  [ORDER_STATUS.PENDING]: 'Pendiente',
  [ORDER_STATUS.CONFIRMED]: 'Confirmado',
  [ORDER_STATUS.PREPARING]: 'En preparación',
  [ORDER_STATUS.READY]: 'Listo',
  [ORDER_STATUS.DELIVERED]: 'Entregado',
  [ORDER_STATUS.CANCELLED]: 'Cancelado',
  
  [RESTAURANT_STATUS.OPEN]: 'Abierto',
  [RESTAURANT_STATUS.CLOSED]: 'Cerrado',
  [RESTAURANT_STATUS.PAUSED]: 'Pausado',
  [RESTAURANT_STATUS.MAINTENANCE]: 'En mantenimiento',
  
  [PRODUCT_STATUS.ACTIVE]: 'Activo',
  [PRODUCT_STATUS.INACTIVE]: 'Inactivo',
  [PRODUCT_STATUS.OUT_OF_STOCK]: 'Sin stock',
  [PRODUCT_STATUS.DISCONTINUED]: 'Descontinuado',
  
  [DELIVERY_STATUS.PENDING]: 'Pendiente',
  [DELIVERY_STATUS.ASSIGNED]: 'Asignado',
  [DELIVERY_STATUS.ON_THE_WAY]: 'En camino',
  [DELIVERY_STATUS.DELIVERED]: 'Entregado',
  [DELIVERY_STATUS.CANCELLED]: 'Cancelado',
};

// Colores para los estados
export const STATUS_COLORS = {
  [ORDER_STATUS.PENDING]: '#f59e0b',    // Amarillo
  [ORDER_STATUS.CONFIRMED]: '#3b82f6',  // Azul
  [ORDER_STATUS.PREPARING]: '#8b5cf6',  // Púrpura
  [ORDER_STATUS.READY]: '#10b981',      // Verde
  [ORDER_STATUS.DELIVERED]: '#059669',  // Verde oscuro
  [ORDER_STATUS.CANCELLED]: '#ef4444',  // Rojo
  
  [RESTAURANT_STATUS.OPEN]: '#10b981',  // Verde
  [RESTAURANT_STATUS.CLOSED]: '#ef4444', // Rojo
  [RESTAURANT_STATUS.PAUSED]: '#f59e0b', // Amarillo
  [RESTAURANT_STATUS.MAINTENANCE]: '#6b7280', // Gris
  
  [PRODUCT_STATUS.ACTIVE]: '#10b981',   // Verde
  [PRODUCT_STATUS.INACTIVE]: '#6b7280', // Gris
  [PRODUCT_STATUS.OUT_OF_STOCK]: '#f59e0b', // Amarillo
  [PRODUCT_STATUS.DISCONTINUED]: '#ef4444', // Rojo
}; 