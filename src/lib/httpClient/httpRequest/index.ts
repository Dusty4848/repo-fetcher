import 'whatwg-fetch';
import { config } from '../../config';
import { standardOptions } from '../standardOptions';

import { Data, HttpRequestHandler } from './types';

const httpRequestHandler = (endpoint: string): HttpRequestHandler => {
  //   declare functions
  const fetchEndpoint = (method: string, url: string, data: Data): Promise<Response> => {
    const headers = {
      ...(data.headers ? data.headers : {}),
    };

    const query =
      (data &&
        data.query &&
        Object.keys(data.query).length > 0 &&
        Object.keys(data.query)
          .filter((k) => data && data.query && data.query[k])
          .map((k) => data && data.query && data.query[k] && `${k}=${encodeURIComponent(data.query[k])}`)
          .join('&')) ||
      '';

    return fetch(endpoint + url + (query ? `?${query}` : ''), {
      method,
      ...standardOptions(headers),
    });
  };

  return {
    get: (url: string, data: Data | undefined = {}): Promise<Response> => fetchEndpoint('GET', url, data),
  };
};

export const httpRequest = httpRequestHandler(config.endpoint);
