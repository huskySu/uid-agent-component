import { SwaiFetch } from '../type';

export const PREFIX = '/proxy/uid-agent';

export const get = (swaiFetch: SwaiFetch | null, url: string) => {
  if (!swaiFetch) {
    // TODO should block user from reaching this point
    return;
  }
  const newUrl = PREFIX + url;
  return swaiFetch(newUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      const res = await response.json();
      if (res.code === 1 || res.code === 'SUCCESS') {
        return res;
      } else {
        throw {
          code: res.code,
          message: res.msg,
        };
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const post = async (
  swaiFetch: SwaiFetch | null,
  url: string,
  body?: unknown,
  config?: RequestInit,
) => {
  if (!swaiFetch) {
    // TODO should block user from reaching this point
    return;
  }
  const newConfig: RequestInit = Object.assign(
    {},
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
    config,
  );
  const newUrl = PREFIX + url;
  return swaiFetch(newUrl, newConfig)
    .then(async (response) => {
      const res = await response.json();
      if (res.code === 1 || res.code === 'SUCCESS') {
        return res;
      }
      res.message = res.msg;
      throw res;
    })
    .catch((error) => {
      throw error;
    });
};
