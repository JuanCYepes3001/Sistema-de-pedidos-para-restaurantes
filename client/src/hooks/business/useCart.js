import { useState, useEffect, useCallback } from 'react';

// Clave para localStorage
const CART_STORAGE_KEY = 'restaurant_cart';

// Estado inicial del carrito
const initialCartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const useCart = () => {
  const [cart, setCart] = useState(initialCartState);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Calcular total y cantidad de items
  const calculateCartTotals = useCallback((items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { total, itemCount };
  }, []);

  // Agregar producto al carrito
  const addToCart = useCallback((product, quantity = 1, customizations = {}) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(
        item => item.id === product.id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      );

      let newItems;
      if (existingItemIndex >= 0) {
        // Si el producto ya existe, aumentar cantidad
        newItems = [...prevCart.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
      } else {
        // Si es un producto nuevo, agregarlo
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          customizations,
          notes: '',
        };
        newItems = [...prevCart.items, newItem];
      }

      const { total, itemCount } = calculateCartTotals(newItems);
      return {
        items: newItems,
        total,
        itemCount,
      };
    });
  }, [calculateCartTotals]);

  // Remover producto del carrito
  const removeFromCart = useCallback((itemId, customizations = {}) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(
        item => !(item.id === itemId && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations))
      );
      
      const { total, itemCount } = calculateCartTotals(newItems);
      return {
        items: newItems,
        total,
        itemCount,
      };
    });
  }, [calculateCartTotals]);

  // Actualizar cantidad de un producto
  const updateQuantity = useCallback((itemId, quantity, customizations = {}) => {
    if (quantity <= 0) {
      removeFromCart(itemId, customizations);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item => {
        if (item.id === itemId && 
            JSON.stringify(item.customizations) === JSON.stringify(customizations)) {
          return { ...item, quantity };
        }
        return item;
      });

      const { total, itemCount } = calculateCartTotals(newItems);
      return {
        items: newItems,
        total,
        itemCount,
      };
    });
  }, [removeFromCart, calculateCartTotals]);

  // Actualizar notas de un producto
  const updateItemNotes = useCallback((itemId, notes, customizations = {}) => {
    setCart(prevCart => {
      const newItems = prevCart.items.map(item => {
        if (item.id === itemId && 
            JSON.stringify(item.customizations) === JSON.stringify(customizations)) {
          return { ...item, notes };
        }
        return item;
      });

      return {
        ...prevCart,
        items: newItems,
      };
    });
  }, []);

  // Limpiar carrito
  const clearCart = useCallback(() => {
    setCart(initialCartState);
    localStorage.removeItem(CART_STORAGE_KEY);
  }, []);

  // Obtener cantidad de un producto específico
  const getItemQuantity = useCallback((itemId, customizations = {}) => {
    const item = cart.items.find(
      item => item.id === itemId && 
      JSON.stringify(item.customizations) === JSON.stringify(customizations)
    );
    return item ? item.quantity : 0;
  }, [cart.items]);

  // Verificar si el carrito está vacío
  const isEmpty = cart.items.length === 0;

  // Obtener items únicos (sin duplicados por personalizaciones)
  const getUniqueItems = useCallback(() => {
    const uniqueItems = [];
    const seen = new Set();

    cart.items.forEach(item => {
      const key = `${item.id}-${JSON.stringify(item.customizations)}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueItems.push(item);
      }
    });

    return uniqueItems;
  }, [cart.items]);

  return {
    // Estado
    items: cart.items,
    total: cart.total,
    itemCount: cart.itemCount,
    isEmpty,
    
    // Métodos
    addToCart,
    removeFromCart,
    updateQuantity,
    updateItemNotes,
    clearCart,
    getItemQuantity,
    getUniqueItems,
  };
}; 