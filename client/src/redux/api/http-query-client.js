import axios from 'axios';
import { hasNestedFile } from '../../utils/has-nested-file';
import { createFormData } from '../../utils/form-data';

// import { store } from '../../app/store';

export const httpClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export function patchAuthorizationHeader(token) {
  httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function axiosBaseQuery({ baseUrl }) {
  return async ({ url, method, data, params }) => {
    try {
      const methodNames = ['POST', 'PUT', 'PATCH'];
      const isMethodWithBody = method && methodNames.includes(method.toUpperCase());
      if (isMethodWithBody && hasNestedFile(data)) {
        const methodName = `${method.toLowerCase()}Form`;
        const result = await httpClient[methodName](baseUrl + url, createFormData(data));
        return { data: result.data };
      }
      const result = await httpClient.request({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      };
    }
  };
}
