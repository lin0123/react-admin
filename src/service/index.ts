import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.timeout = 800000;

const loading = {
  show() {},
  hide() {},
};

let requestCount = 0;

const EXPIRE_TOKEN_CODES = ['10000'];

const ERROR_CODES = {
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  500: '服务器端出错',
};

type ERROR_CODES_TYPES = typeof ERROR_CODES;

export interface ResType<T = unknown> {
  data: T;
}

axios.interceptors.request.use(
  (config) => {
    if (!requestCount) {
      loading.show();
    }
    requestCount += 1;

    return config;
  },
  (err) => {
    requestCount -= 1;
    if (!requestCount) {
      loading.hide();
    }
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  (response) => {
    requestCount -= 1;
    if (!requestCount) {
      loading.hide();
    }
    const data = response.data || {};
    if (EXPIRE_TOKEN_CODES.includes(data.code)) {
      console.log('登录失效处理');
      window.location.href = '/login';
      return {};
    }

    const resCode: keyof ERROR_CODES_TYPES = data.status || data.code;

    if (ERROR_CODES[resCode]) {
      return Promise.reject(data);
    }

    return data;
  },
  (err) => {
    requestCount -= 1;
    if (!requestCount) {
      loading.hide();
    }
    let errCode: keyof ERROR_CODES_TYPES = 500;
    let errMsg = '连接到服务器失败';
    if (err?.response) {
      const { code, status } = err.response;
      errCode = code || status || 500;
      errMsg = ERROR_CODES[errCode];
    }
    return Promise.reject({
      code: errCode,
      msg: errMsg,
      data: err || null,
    });
  },
);

export const get = <T = unknown, U = unknown>(
  url: string,
  params?: U,
  config?: AxiosRequestConfig,
) => axios.get<T, ResType<T>>(
  url, { params: { ...params, t: Date.now() }, ...config },
);

export const post = <T = unknown, U = unknown>(
  url: string,
  params?: U,
  config: AxiosRequestConfig = {},
) => {
  if (Array.isArray(params)) {
    return axios.post<T, ResType<T>>(url, [...params], config);
  }
  return axios.post<T, ResType<T>>(url, { ...params }, config);
};

export const downFile = <T = unknown, U = unknown>(
  url: string,
  params?: U,
  config: AxiosRequestConfig = { responseType: 'blob' },
) => axios.post<T, ResType<T>>(url, { ...params }, config);

export default { get, post, downFile };
