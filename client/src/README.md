# QuickRecipes - Estructura del Proyecto Frontend

## 📁 Estructura de Directorios

Este proyecto sigue una arquitectura modular y escalable para una SPA (Single Page Application) de gestión de restaurantes.

### 🧩 Componentes (`/components`)

Componentes reutilizables organizados por categoría:

- **`/ui`** - Componentes básicos de interfaz (Button, Input, Modal, etc.)
- **`/forms`** - Componentes de formularios específicos
- **`/navigation`** - Componentes de navegación (Header, Sidebar, etc.)
- **`/business`** - Componentes específicos del negocio (ProductCard, OrderItem, etc.)
- **`/layout`** - Componentes de layout (Container, Grid, etc.)

### 🖥️ Vistas (`/views`)

Páginas principales organizadas por módulo:

- **`/client`** - Vistas para clientes (Menu, Cart, Checkout, etc.)
- **`/admin`** - Vistas para administradores (Dashboard, Products, etc.)
- **`/kitchen`** - Vistas para cocina (OrdersBoard, OrderDetail)
- **`/delivery`** - Vistas para domicilios (opcional)
- **`/auth`** - Vistas de autenticación (Login, Register, etc.)

### 🎣 Hooks (`/hooks`)

Hooks personalizados organizados por funcionalidad:

- **`/api`** - Hooks para llamadas a API
- **`/ui`** - Hooks para funcionalidades de UI
- **`/business`** - Hooks específicos del negocio
- **`/utils`** - Hooks utilitarios

### 🔧 Servicios (`/services`)

Servicios y APIs organizados por tipo:

- **`/api`** - Cliente HTTP y servicios de API
- **`/websocket`** - Servicios de WebSocket
- **`/storage`** - Servicios de almacenamiento local
- **`/external`** - Servicios externos (QR, Maps, Payments)

### 🛠️ Utilidades (`/utils`)

Funciones utilitarias organizadas por categoría:

- **`/validation`** - Funciones de validación
- **`/formatting`** - Funciones de formateo
- **`/helpers`** - Funciones auxiliares
- **`/business`** - Funciones específicas del negocio

### 📋 Constantes (`/constants`)

Archivos de constantes y configuraciones:

- **`api.js`** - URLs de API y endpoints
- **`routes.js`** - Rutas de la aplicación
- **`status.js`** - Estados de pedidos, productos, etc.
- **`messages.js`** - Mensajes de error, éxito
- **`config.js`** - Configuraciones generales
- **`business.js`** - Constantes del negocio

### 🎨 Estilos (`/styles`)

Archivos de estilos organizados:

- **`globals.css`** - Estilos globales
- **`variables.css`** - Variables CSS
- **`/components`** - Estilos específicos de componentes
- **`/layouts`** - Estilos de layouts
- **`/themes`** - Temas (claro/oscuro)

### 🔄 Context (`/context`)

Contextos de React para estado global:

- **`AuthContext.js`** - Autenticación y roles
- **`CartContext.js`** - Carrito de compras
- **`OrderContext.js`** - Estado de pedidos
- **`RestaurantContext.js`** - Información del restaurante
- **`ThemeContext.js`** - Tema de la aplicación

### 🏗️ Layouts (`/layouts`)

Layouts reutilizables:

- **`MainLayout.js`** - Layout principal
- **`AdminLayout.js`** - Layout para administradores
- **`KitchenLayout.js`** - Layout para cocina
- **`ClientLayout.js`** - Layout para clientes
- **`AuthLayout.js`** - Layout para autenticación

## 🎯 Convenciones de Nomenclatura

- **Componentes**: PascalCase (ProductCard, OrderStatus)
- **Hooks**: camelCase con prefijo 'use' (useProducts, useOrderStatus)
- **Servicios**: camelCase (productService, orderService)
- **Utilidades**: camelCase (formatCurrency, validateEmail)
- **Constantes**: UPPER_SNAKE_CASE (API_BASE_URL, ORDER_STATUS)
- **Archivos CSS**: kebab-case (product-card.css, order-status.css)

## 🔄 Flujo de Datos

1. **Vistas** → Llaman a **Hooks**
2. **Hooks** → Llaman a **Services**
3. **Services** → Llaman a **APIs externas**
4. **Utils** → Usados por **Services** y **Hooks**
5. **Constants** → Usados en toda la aplicación
6. **Context** → Estado global compartido

## 🚀 Cómo Empezar

### 1. Crear un nuevo componente

```bash
# Crear estructura del componente
mkdir src/components/business/ProductCard
touch src/components/business/ProductCard/ProductCard.jsx
touch src/components/business/ProductCard/ProductCard.css
touch src/components/business/ProductCard/ProductCard.test.js
touch src/components/business/ProductCard/index.js
```

### 2. Crear un nuevo hook

```bash
# Crear hook en la categoría apropiada
touch src/hooks/business/useProduct.js
```

### 3. Crear una nueva vista

```bash
# Crear estructura de la vista
mkdir src/views/client/ProductDetail
touch src/views/client/ProductDetail/ProductDetail.jsx
touch src/views/client/ProductDetail/ProductDetail.css
touch src/views/client/ProductDetail/index.js
```

### 4. Crear un nuevo servicio

```bash
# Crear servicio en la categoría apropiada
touch src/services/api/productService.js
```

## 📝 Ejemplos de Uso

### Usando un componente

```jsx
import Button from '../components/ui/Button';

function MyComponent() {
  return (
    <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
      Hacer Pedido
    </Button>
  );
}
```

### Usando un hook

```jsx
import { useCart } from '../hooks/business/useCart';

function ProductCard({ product }) {
  const { addToCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button onClick={() => addToCart(product)}>
        Agregar al Carrito ({quantity})
      </Button>
    </div>
  );
}
```

### Usando un contexto

```jsx
import { useAuth } from '../context/AuthContext';

function ProtectedComponent() {
  const { user, isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <div>Debes iniciar sesión</div>;
  }

  if (!isAdmin()) {
    return <div>No tienes permisos de administrador</div>;
  }

  return <div>Bienvenido, {user.name}</div>;
}
```

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3001/api
VITE_WS_URL=ws://localhost:3001
VITE_APP_NAME=QuickRecipes
```

### Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "socket.io-client": "^4.6.0"
}
```

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

Esta estructura está diseñada para ser escalable, mantenible y fácil de entender. Cada directorio tiene una responsabilidad específica y las convenciones de nomenclatura ayudan a mantener la consistencia en todo el proyecto. 