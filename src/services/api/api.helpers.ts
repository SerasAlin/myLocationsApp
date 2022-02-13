import axios, { Method } from 'axios';

export const request = async <T>(
  url: string,
  method: Method,
  payload?: any,
  requestHeaders?: { [key: string]: string }
): Promise<T> => {
  const headers = {
    'Content-Type': 'application/json',
    ...requestHeaders,
  };

  const response = await axios.request({
    url,
    method,
    headers,
    data: payload,
  });

  return response.data;
};
