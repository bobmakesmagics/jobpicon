// hooks/useApi.ts
import { useState } from 'react';
import axios from 'axios';

interface ApiResponse<T> {
  data: T;
  error: string | null;
  isLoading: boolean;
}

export function useApi<T>() {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const callApi = async (endpoint: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any) => {
    setResponse({ data: null, error: null, isLoading: true });

    try {
      const result = await axios({
        url: `/api/${endpoint}`,
        method,
        data,
      });
      setResponse({ data: result.data, error: null, isLoading: false });
    } catch (error) {
      setResponse({ data: null, error: error.message, isLoading: false });
    }
  };

  return { response, callApi };
}