import { API_BASE_URL, DEFAULT_HEADERS, API_TIMEOUTS } from '../../../constants/api';

// Cliente HTTP base usando fetch
class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.defaultHeaders = DEFAULT_HEADERS;
  }

  // Método para obtener el token de autenticación
  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  // Método para agregar headers de autenticación
  getHeaders(customHeaders = {}) {
    const token = this.getAuthToken();
    const headers = {
      ...this.defaultHeaders,
      ...customHeaders,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  // Método para construir la URL completa
  buildURL(endpoint) {
    return `${this.baseURL}${endpoint}`;
  }

  // Método para manejar respuestas
  async handleResponse(response) {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  // Método GET
  async get(endpoint, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders(options.headers);

    const response = await fetch(url, {
      method: 'GET',
      headers,
      signal: AbortSignal.timeout(API_TIMEOUTS.REQUEST),
      ...options,
    });

    return this.handleResponse(response);
  }

  // Método POST
  async post(endpoint, data = {}, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders(options.headers);

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(API_TIMEOUTS.REQUEST),
      ...options,
    });

    return this.handleResponse(response);
  }

  // Método PUT
  async put(endpoint, data = {}, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders(options.headers);

    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(API_TIMEOUTS.REQUEST),
      ...options,
    });

    return this.handleResponse(response);
  }

  // Método PATCH
  async patch(endpoint, data = {}, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders(options.headers);

    const response = await fetch(url, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(API_TIMEOUTS.REQUEST),
      ...options,
    });

    return this.handleResponse(response);
  }

  // Método DELETE
  async delete(endpoint, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders(options.headers);

    const response = await fetch(url, {
      method: 'DELETE',
      headers,
      signal: AbortSignal.timeout(API_TIMEOUTS.REQUEST),
      ...options,
    });

    return this.handleResponse(response);
  }

  // Método para subida de archivos
  async upload(endpoint, formData, options = {}) {
    const url = this.buildURL(endpoint);
    const headers = this.getHeaders({
      ...options.headers,
      // No incluir Content-Type para que el navegador lo establezca automáticamente
    });
    delete headers['Content-Type'];

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
      signal: AbortSignal.timeout(API_TIMEOUTS.UPLOAD),
      ...options,
    });

    return this.handleResponse(response);
  }
}

// Instancia singleton del cliente
const apiClient = new ApiClient();

export default apiClient; 