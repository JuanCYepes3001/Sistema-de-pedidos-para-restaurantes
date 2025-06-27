# Estructura de Directorios - QuickRecipes SPA

## 📁 Estructura Principal

```
src/
├── components/          # Componentes reutilizables
├── views/              # Páginas/Vistas principales
├── hooks/              # Custom hooks
├── services/           # Servicios y APIs
├── utils/              # Funciones utilitarias
├── constants/          # Constantes y configuraciones
├── types/              # Tipos TypeScript (si se usa)
├── assets/             # Recursos estáticos
├── styles/             # Estilos globales
├── context/            # Context API providers
└── layouts/            # Layouts reutilizables
```

## 📂 Detalle de cada directorio

### 🧩 components/
```
components/
├── ui/                 # Componentes de UI básicos
│   ├── Button/
│   ├── Input/
│   ├── Modal/
│   ├── Card/
│   ├── Badge/
│   └── Loading/
├── forms/              # Componentes de formularios
│   ├── ProductForm/
│   ├── OrderForm/
│   └── LoginForm/
├── navigation/         # Componentes de navegación
│   ├── Header/
│   ├── Sidebar/
│   ├── Breadcrumb/
│   └── Pagination/
├── business/           # Componentes específicos del negocio
│   ├── ProductCard/
│   ├── OrderItem/
│   ├── MenuCategory/
│   ├── CartItem/
│   └── OrderStatus/
└── layout/             # Componentes de layout
    ├── Container/
    ├── Grid/
    └── Section/
```

### 🖥️ views/
```
views/
├── client/             # Vistas del módulo cliente
│   ├── Menu/
│   ├── ProductDetail/
│   ├── Cart/
│   ├── Checkout/
│   ├── OrderStatus/
│   └── QRScanner/
├── admin/              # Vistas del módulo administrador
│   ├── Dashboard/
│   ├── Products/
│   ├── Categories/
│   ├── Orders/
│   ├── Reports/
│   └── Settings/
├── kitchen/            # Vistas del módulo cocina
│   ├── OrdersBoard/
│   └── OrderDetail/
├── delivery/           # Vistas del módulo domicilios (opcional)
│   ├── DeliveryBoard/
│   └── DeliveryMap/
└── auth/               # Vistas de autenticación
    ├── Login/
    ├── Register/
    └── ForgotPassword/
```

### 🎣 hooks/
```
hooks/
├── api/                # Hooks para llamadas a API
│   ├── useProducts.js
│   ├── useOrders.js
│   ├── useAuth.js
│   └── useRestaurant.js
├── ui/                 # Hooks para UI
│   ├── useModal.js
│   ├── useForm.js
│   ├── useLocalStorage.js
│   └── useDebounce.js
├── business/           # Hooks específicos del negocio
│   ├── useCart.js
│   ├── useOrderStatus.js
│   ├── useQRCode.js
│   └── useNotifications.js
└── utils/              # Hooks utilitarios
    ├── usePrevious.js
    ├── useInterval.js
    └── useWindowSize.js
```

### 🔧 services/
```
services/
├── api/                # Configuración y funciones de API
│   ├── client.js       # Cliente HTTP (axios/fetch)
│   ├── auth.js         # Servicios de autenticación
│   ├── products.js     # Servicios de productos
│   ├── orders.js       # Servicios de pedidos
│   └── restaurant.js   # Servicios del restaurante
├── websocket/          # Servicios de WebSocket
│   ├── socket.js
│   └── notifications.js
├── storage/            # Servicios de almacenamiento
│   ├── localStorage.js
│   └── sessionStorage.js
└── external/           # Servicios externos
    ├── qrGenerator.js
    ├── maps.js
    └── payments.js
```

### 🛠️ utils/
```
utils/
├── validation/         # Funciones de validación
│   ├── forms.js
│   ├── email.js
│   └── phone.js
├── formatting/         # Funciones de formateo
│   ├── currency.js
│   ├── date.js
│   ├── phone.js
│   └── text.js
├── helpers/            # Funciones auxiliares
│   ├── array.js
│   ├── object.js
│   ├── string.js
│   └── math.js
└── business/           # Funciones específicas del negocio
    ├── orderCalculations.js
    ├── menuFilters.js
    └── qrUtils.js
```

### 📋 constants/
```
constants/
├── api.js              # URLs de API, endpoints
├── routes.js           # Rutas de la aplicación
├── status.js           # Estados de pedidos, productos
├── messages.js         # Mensajes de error, éxito
├── config.js           # Configuraciones generales
└── business.js         # Constantes del negocio
```

### 🎨 styles/
```
styles/
├── globals.css         # Estilos globales
├── variables.css       # Variables CSS (colores, fuentes)
├── components/         # Estilos específicos de componentes
│   ├── buttons.css
│   ├── forms.css
│   └── cards.css
├── layouts/            # Estilos de layouts
│   ├── header.css
│   ├── sidebar.css
│   └── grid.css
└── themes/             # Temas (claro/oscuro)
    ├── light.css
    └── dark.css
```

### 🔄 context/
```
context/
├── AuthContext.js      # Contexto de autenticación
├── CartContext.js      # Contexto del carrito
├── OrderContext.js     # Contexto de pedidos
├── RestaurantContext.js # Contexto del restaurante
└── ThemeContext.js     # Contexto del tema
```

### 🏗️ layouts/
```
layouts/
├── MainLayout.js       # Layout principal
├── AdminLayout.js      # Layout para administradores
├── KitchenLayout.js    # Layout para cocina
├── ClientLayout.js     # Layout para clientes
└── AuthLayout.js       # Layout para autenticación
```

## 📁 Estructura de un componente típico

```
components/business/ProductCard/
├── ProductCard.jsx
├── ProductCard.css
├── ProductCard.test.js
└── index.js
```

## 📁 Estructura de una vista típica

```
views/client/Menu/
├── Menu.jsx
├── Menu.css
├── components/         # Componentes específicos de esta vista
│   ├── MenuFilter.jsx
│   └── MenuGrid.jsx
├── hooks/              # Hooks específicos de esta vista
│   └── useMenu.js
└── index.js
```

## 🎯 Convenciones de nomenclatura

- **Componentes**: PascalCase (ProductCard, OrderStatus)
- **Hooks**: camelCase con prefijo 'use' (useProducts, useOrderStatus)
- **Servicios**: camelCase (productService, orderService)
- **Utilidades**: camelCase (formatCurrency, validateEmail)
- **Constantes**: UPPER_SNAKE_CASE (API_BASE_URL, ORDER_STATUS)
- **Archivos CSS**: kebab-case (product-card.css, order-status.css)

## 🔄 Flujo de datos recomendado

1. **Vistas** → Llaman a **Hooks**
2. **Hooks** → Llaman a **Services**
3. **Services** → Llaman a **APIs externas**
4. **Utils** → Usados por **Services** y **Hooks**
5. **Constants** → Usados en toda la aplicación
6. **Context** → Estado global compartido

## 🎯 Gestión de Estado con Context API

### Contextos principales:
- **AuthContext**: Maneja autenticación y roles de usuario
- **CartContext**: Gestiona el carrito de compras del cliente
- **OrderContext**: Maneja el estado de pedidos en tiempo real
- **RestaurantContext**: Información del restaurante actual
- **ThemeContext**: Tema claro/oscuro

### Ventajas de usar Context API:
- ✅ Más simple que Redux para proyectos medianos
- ✅ Integrado nativamente en React
- ✅ Menos boilerplate
- ✅ Perfecto para el estado compartido entre componentes
- ✅ Ideal para la gestión de autenticación y carrito

Esta estructura permite una clara separación de responsabilidades y facilita el mantenimiento y escalabilidad del proyecto usando Context API para el estado global. 