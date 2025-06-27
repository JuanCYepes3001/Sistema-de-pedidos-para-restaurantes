import { createContext, useContext, useReducer, useEffect } from 'react';
import { USER_ROLES } from '../constants/status';

// Estado inicial
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Tipos de acciones
const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_LOADING: 'SET_LOADING',
};

// Reducer para manejar el estado
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    default:
      return state;
  }
};

// Crear el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Función para iniciar sesión
  const login = async (credentials) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });
      
      // Aquí iría la llamada a la API de login
      // const response = await authService.login(credentials);
      
      // Por ahora, simulamos una respuesta
      const mockResponse = {
        user: {
          id: 1,
          email: credentials.email,
          name: 'Usuario Demo',
          role: USER_ROLES.ADMIN,
        },
        token: 'mock-jwt-token',
      };

      // Guardar token en localStorage
      localStorage.setItem('authToken', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));

      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: mockResponse,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  // Función para limpiar errores
  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  // Función para verificar si el usuario tiene un rol específico
  const hasRole = (role) => {
    return state.user?.role === role;
  };

  // Función para verificar si el usuario tiene permisos de administrador
  const isAdmin = () => {
    return hasRole(USER_ROLES.ADMIN);
  };

  // Función para verificar si el usuario tiene permisos de cocina
  const isKitchen = () => {
    return hasRole(USER_ROLES.KITCHEN);
  };

  // Función para verificar si el usuario tiene permisos de delivery
  const isDelivery = () => {
    return hasRole(USER_ROLES.DELIVERY);
  };

  // Función para verificar si el usuario es cliente
  const isClient = () => {
    return hasRole(USER_ROLES.CLIENT);
  };

  // Cargar datos del usuario desde localStorage al iniciar
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');

    if (token && user) {
      try {
        const userData = JSON.parse(user);
        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: {
            user: userData,
            token,
          },
        });
      } catch (error) {
        // Si hay error al parsear, limpiar localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        dispatch({ type: AUTH_ACTIONS.LOGOUT });
      }
    } else {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  }, []);

  // Valor del contexto
  const value = {
    ...state,
    login,
    logout,
    clearError,
    hasRole,
    isAdmin,
    isKitchen,
    isDelivery,
    isClient,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 